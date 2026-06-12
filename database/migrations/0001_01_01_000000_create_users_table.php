<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Languages Table
        Schema::create('languages', function (Blueprint $table) {
            $table->id();
            $table->string('code', 10)->unique(); // 'en', 'zh-tw', 'zh-cn'
            $table->string('name', 50);
            $table->timestamps();
        });

        // 2. Admins Table
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('username', 50)->unique();
            $table->string('email', 100)->unique();
            $table->string('password');
            $table->timestamps();
        });

        // 3. Users Table
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('mobile_number', 20)->unique();
            $table->string('password');
            $table->foreignId('preferred_language_id')->constrained('languages')->onDelete('restrict');
            $table->integer('total_points')->default(0);
            $table->string('status')->default('active'); // active, suspended, inactive
            $table->rememberToken();
            $table->timestamps();
        });

        // 4. Coupons Table
        Schema::create('coupons', function (Blueprint $table) {
            $table->id();
            $table->string('code', 50)->unique();
            $table->string('image_url')->nullable();
            $table->integer('required_points')->unsigned();
            $table->integer('total_quota')->unsigned();
            $table->integer('remaining_quota')->unsigned();
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->string('status')->default('draft'); // draft, active, expired, disabled
            $table->foreignId('created_by')->constrained('admins')->onDelete('restrict');
            $table->foreignId('updated_by')->constrained('admins')->onDelete('restrict');
            $table->timestamps();
        });

        // 5. Coupon Translations Table
        Schema::create('coupon_translations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('coupon_id')->constrained('coupons')->onDelete('cascade');
            $table->foreignId('language_id')->constrained('languages')->onDelete('restrict');
            $table->string('title');
            $table->text('description');
            $table->foreignId('created_by')->constrained('admins')->onDelete('restrict');
            $table->foreignId('updated_by')->constrained('admins')->onDelete('restrict');
            $table->unique(['coupon_id', 'language_id']);
            $table->timestamps();
        });

        // 6. Redemptions Table
        Schema::create('redemptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('restrict');
            $table->foreignId('coupon_id')->constrained('coupons')->onDelete('restrict');
            $table->string('redemption_code', 50)->unique();
            $table->string('qr_code_value', 100)->unique();
            $table->integer('points_deducted')->unsigned();
            $table->string('status')->default('completed'); // pending, completed, cancelled, used
            $table->timestamps();
        });

        // 7. Lucky Draws Table
        Schema::create('lucky_draws', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('restrict');
            $table->date('draw_date');
            $table->integer('points_awarded')->unsigned();
            $table->unique(['user_id', 'draw_date']);
            $table->timestamps();
        });

        // 8. User Points Transactions Table (Ledger)
        Schema::create('user_points_transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('restrict');
            $table->string('transaction_type'); // lucky_draw, redemption, adjustment
            $table->integer('points'); // signed (+ or -)
            $table->integer('reference_id')->nullable();
            $table->string('description')->nullable();
            $table->foreignId('created_by_admin_id')->nullable()->constrained('admins')->onDelete('restrict');
            $table->timestamps();
        });

        // 9. Password Reset Tokens
        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        // 10. Sessions Table (Required for session driver = database)
        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('user_points_transactions');
        Schema::dropIfExists('lucky_draws');
        Schema::dropIfExists('redemptions');
        Schema::dropIfExists('coupon_translations');
        Schema::dropIfExists('coupons');
        Schema::dropIfExists('users');
        Schema::dropIfExists('admins');
        Schema::dropIfExists('languages');
    }
};
