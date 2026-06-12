<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Language;
use App\Models\Admin;
use App\Models\Coupon;
use App\Models\CouponTranslation;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Seed Languages
        $en = Language::create(['code' => 'en', 'name' => 'English']);
        $tw = Language::create(['code' => 'zh-tw', 'name' => '繁體中文']);
        $cn = Language::create(['code' => 'zh-cn', 'name' => '简体中文']);

        // 2. Seed Admin
        $admin = Admin::create([
            'username' => 'admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('AdminPass123'),
        ]);

        // 3. Seed Demo User
        User::create([
            'mobile_number' => '+85291234567',
            'password' => Hash::make('Password123'),
            'preferred_language_id' => $en->id,
            'total_points' => 1500,
            'status' => 'active',
        ]);

        // 4. Seed Demo Coupons
        $coupons = [
            [
                'code' => 'COUPON-STARBUCKS-50',
                'required_points' => 500,
                'total_quota' => 100,
                'remaining_quota' => 85,
                'image_url' => 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format&fit=crop&q=60',
                'start_date' => '2026-06-01 00:00:00',
                'end_date' => '2026-12-31 23:59:59',
                'status' => 'active',
                'translations' => [
                    'en' => ['title' => 'Starbucks HK$50 Cash Voucher', 'description' => 'Save HK$50 on any beverages at regional Starbucks stores.'],
                    'zh-tw' => ['title' => '星巴克 HK$50 現金券', 'description' => '於指定星巴克門市購買任何飲品即可扣減 HK$50。'],
                    'zh-cn' => ['title' => '星巴克 HK$50 现金券', 'description' => '于指定星巴克门市购买任何饮品即可扣减 HK$50。'],
                ]
            ],
            [
                'code' => 'COUPON-AMAZON-20',
                'required_points' => 800,
                'total_quota' => 50,
                'remaining_quota' => 42,
                'image_url' => 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500&auto=format&fit=crop&q=60',
                'start_date' => '2026-06-01 00:00:00',
                'end_date' => '2026-12-31 23:59:59',
                'status' => 'active',
                'translations' => [
                    'en' => ['title' => 'Amazon $20 Gift Card', 'description' => 'Redeem towards millions of items store-wide at Amazon.com.'],
                    'zh-tw' => ['title' => '亞馬遜 $20 美金禮品卡', 'description' => '可用於亞馬遜網站上數百萬款商品的消費抵扣。'],
                    'zh-cn' => ['title' => '亚马逊 $20 美金礼品卡', 'description' => '可用于亚马逊网站上数百万款商品的消费抵扣。'],
                ]
            ],
            [
                'code' => 'COUPON-NETFLIX-1M',
                'required_points' => 1200,
                'total_quota' => 30,
                'remaining_quota' => 0,
                'image_url' => 'https://images.unsplash.com/photo-1574375927938-d5a98e8edd86?w=500&auto=format&fit=crop&q=60',
                'start_date' => '2026-06-01 00:00:00',
                'end_date' => '2026-12-31 23:59:59',
                'status' => 'active',
                'translations' => [
                    'en' => ['title' => 'Netflix 1-Month Premium', 'description' => 'Unlimited movies, TV shows, and mobile games in Ultra HD.'],
                    'zh-tw' => ['title' => 'Netflix 1個月高級會員', 'description' => '無限量觀看電影、電視節目，支援4K Ultra HD畫質。'],
                    'zh-cn' => ['title' => 'Netflix 1个月高级会员', 'description' => '无限量观看电影、电视节目，支持4K Ultra HD画质。'],
                ]
            ],
            [
                'code' => 'COUPON-UBER-10',
                'required_points' => 200,
                'total_quota' => 200,
                'remaining_quota' => 198,
                'image_url' => 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=500&auto=format&fit=crop&q=60',
                'start_date' => '2026-01-01 00:00:00',
                'end_date' => '2026-05-30 23:59:59',
                'status' => 'expired',
                'translations' => [
                    'en' => ['title' => 'Uber $10 Ride Discount', 'description' => 'Enjoy $10 off your next rides. Valid on UberX or Premium.'],
                    'zh-tw' => ['title' => 'Uber $10 乘車優惠券', 'description' => '下一程 Uber 乘車抵減 $10，適用於優步所有車型。'],
                    'zh-cn' => ['title' => 'Uber $10 乘车优惠券', 'description' => '下一程 Uber 乘车抵减 $10，适用于优步所有车型。'],
                ]
            ],
        ];

        foreach ($coupons as $cData) {
            $coupon = Coupon::create([
                'code' => $cData['code'],
                'required_points' => $cData['required_points'],
                'total_quota' => $cData['total_quota'],
                'remaining_quota' => $cData['remaining_quota'],
                'image_url' => $cData['image_url'],
                'start_date' => $cData['start_date'],
                'end_date' => $cData['end_date'],
                'status' => $cData['status'],
                'created_by' => $admin->id,
                'updated_by' => $admin->id,
            ]);

            foreach ($cData['translations'] as $langCode => $t) {
                $lang = Language::where('code', $langCode)->first();
                CouponTranslation::create([
                    'coupon_id' => $coupon->id,
                    'language_id' => $lang->id,
                    'title' => $t['title'],
                    'description' => $t['description'],
                    'created_by' => $admin->id,
                    'updated_by' => $admin->id,
                ]);
            }
        }
    }
}
