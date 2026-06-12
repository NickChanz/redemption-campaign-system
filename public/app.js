// Multi-Language Translation Dictionaries
const i18n = {
    en: {
        login_title: "Welcome Back",
        login_subtitle: "Enter your mobile number and password to login",
        mobile_label: "Mobile Number",
        password_label: "Password",
        confirm_password_label: "Confirm Password",
        pref_lang_label: "Preferred Language",
        login_btn: "Sign In",
        register_btn: "Register",
        no_account: "Don't have an account?",
        already_have_account: "Already have an account?",
        register_link: "Register Now",
        register_title: "Create Account",
        register_subtitle: "Register with your mobile number to earn rewards",
        login_link: "Sign In",
        my_profile: "My Profile",
        mobile_number: "Mobile",
        lang_label: "Language",
        points_balance: "Points Balance",
        view_redemptions_history: "Redemption History",
        daily_lucky_draw: "Daily Lucky Draw",
        lucky_draw_desc: "Win random points once every day!",
        available_coupons: "Browse E-Coupons",
        filter_all: "All",
        filter_redeemable: "Redeemable",
        filter_expired: "Expired",
        my_redemptions: "My Redemption History",
        back_to_dashboard: "Dashboard",
        coupon_name: "Coupon Name",
        points_deducted: "Points Deducted",
        redemption_code_label: "Redemption Code",
        date: "Date",
        action: "Action",
        your_qr_code: "Your Unique QR Code:",
        btn_redeem: "Redeem Now",
        btn_view_qr: "View QR Code",
        btn_points_short: "Insufficient Points",
        btn_no_quota: "Out of Quota",
        btn_expired: "Expired",
        alert_draw_success: "Congratulations! You won {points} points!",
        alert_already_drawn: "You have already participated in today's lucky draw.",
        alert_redeem_success: "Redemption successful! Enjoy your voucher.",
        status_active: "Active",
        status_draft: "Draft",
        status_expired: "Expired",
        status_disabled: "Disabled"
    },
    "zh-tw": {
        login_title: "歡迎回來",
        login_subtitle: "請輸入您的手機號碼和密碼登入",
        mobile_label: "手機號碼",
        password_label: "密碼",
        confirm_password_label: "確認密碼",
        pref_lang_label: "偏好語言",
        login_btn: "登入",
        register_btn: "註冊",
        no_account: "還沒有帳戶？",
        already_have_account: "已經有帳戶？",
        register_link: "立即註冊",
        register_title: "建立帳戶",
        register_subtitle: "使用您的手機號碼註冊以賺取積分",
        login_link: "登入",
        my_profile: "我的個人檔案",
        mobile_number: "手機號碼",
        lang_label: "語言",
        points_balance: "可用積分",
        view_redemptions_history: "兌換記錄",
        daily_lucky_draw: "每日幸運抽獎",
        lucky_draw_desc: "每天均可參與一次抽獎，贏取隨機積分！",
        available_coupons: "瀏覽電子優惠券",
        filter_all: "全部",
        filter_redeemable: "可兌換",
        filter_expired: "已過期",
        my_redemptions: "我的電子券兌換記錄",
        back_to_dashboard: "返回儀表板",
        coupon_name: "優惠券名稱",
        points_deducted: "已扣除積分",
        redemption_code_label: "兌換序號",
        date: "兌換日期",
        action: "操作",
        your_qr_code: "您的專屬 QR Code 兌換碼：",
        btn_redeem: "立即兌換",
        btn_view_qr: "查看 QR Code",
        btn_points_short: "積分不足",
        btn_no_quota: "名額已滿",
        btn_expired: "已過期",
        alert_draw_success: "恭喜！您抽中了 {points} 積分！",
        alert_already_drawn: "您今天已經參與過抽獎了，明天再來吧！",
        alert_redeem_success: "兌換成功！已扣除相應積分。",
        status_active: "已啟用",
        status_draft: "草稿",
        status_expired: "已過期",
        status_disabled: "已停用"
    },
    "zh-cn": {
        login_title: "欢迎回来",
        login_subtitle: "请输入您的手机号码和密码登录",
        mobile_label: "手机号码",
        password_label: "密码",
        confirm_password_label: "确认密码",
        pref_lang_label: "偏好语言",
        login_btn: "登录",
        register_btn: "注册",
        no_account: "还没有账户？",
        already_have_account: "已有账户？",
        register_link: "立即注册",
        register_title: "创建账户",
        register_subtitle: "使用您的手机号码注册以赚取积分",
        login_link: "登录",
        my_profile: "我的个人信息",
        mobile_number: "手机号码",
        lang_label: "语言",
        points_balance: "可用积分",
        view_redemptions_history: "兑换记录",
        daily_lucky_draw: "每日幸运抽奖",
        lucky_draw_desc: "每天均可参与一次抽奖，赢取随机积分！",
        available_coupons: "浏览电子优惠券",
        filter_all: "全部",
        filter_redeemable: "可兑换",
        filter_expired: "已过期",
        my_redemptions: "我的电子券兑换记录",
        back_to_dashboard: "返回仪表板",
        coupon_name: "优惠券名称",
        points_deducted: "已扣除积分",
        redemption_code_label: "兑换序号",
        date: "兑换日期",
        action: "操作",
        your_qr_code: "您的专属 QR Code 兑换码：",
        btn_redeem: "立即兑换",
        btn_view_qr: "查看 QR Code",
        btn_points_short: "积分不足",
        btn_no_quota: "名额已满",
        btn_expired: "已过期",
        alert_draw_success: "恭喜！您抽中了 {points} 积分！",
        alert_already_drawn: "您今天已经参与过抽奖了，明天再来吧！",
        alert_redeem_success: "兑换成功！已扣除相应积分。",
        status_active: "已启用",
        status_draft: "草稿",
        status_expired: "已过期",
        status_disabled: "已停用"
    }
};

// Initial Mock Coupon Data
const defaultCoupons = [
    {
        id: 1,
        code: "COUPON-STARBUCKS-50",
        required_points: 500,
        total_quota: 100,
        remaining_quota: 85,
        image_url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format&fit=crop&q=60",
        start_date: "2026-06-01T00:00",
        end_date: "2026-12-31T23:59",
        status: "active",
        translations: {
            en: { title: "Starbucks HK$50 Cash Voucher", description: "Save HK$50 on any beverages at regional Starbucks stores." },
            "zh-tw": { title: "星巴克 HK$50 現金券", description: "於指定星巴克門市購買任何飲品即可扣減 HK$50。" },
            "zh-cn": { title: "星巴克 HK$50 现金券", description: "于指定星巴克门市购买任何饮品即可扣减 HK$50。" }
        }
    },
    {
        id: 2,
        code: "COUPON-AMAZON-20",
        required_points: 800,
        total_quota: 50,
        remaining_quota: 42,
        image_url: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500&auto=format&fit=crop&q=60",
        start_date: "2026-06-01T00:00",
        end_date: "2026-12-31T23:59",
        status: "active",
        translations: {
            en: { title: "Amazon $20 Gift Card", description: "Redeem towards millions of items store-wide at Amazon.com." },
            "zh-tw": { title: "亞馬遜 $20 美金禮品卡", description: "可用於亞馬遜網站上數百萬款商品的消費抵扣。" },
            "zh-cn": { title: "亚马逊 $20 美金礼品卡", description: "可用于亚马逊网站上数百万款商品的消费抵扣。" }
        }
    },
    {
        id: 3,
        code: "COUPON-NETFLIX-1M",
        required_points: 1200,
        total_quota: 30,
        remaining_quota: 0, // Out of quota for demo
        image_url: "https://images.unsplash.com/photo-1574375927938-d5a98e8edd86?w=500&auto=format&fit=crop&q=60",
        start_date: "2026-06-01T00:00",
        end_date: "2026-12-31T23:59",
        status: "active",
        translations: {
            en: { title: "Netflix 1-Month Premium", description: "Unlimited movies, TV shows, and mobile games in Ultra HD." },
            "zh-tw": { title: "Netflix 1個月高級會員", description: "無限量觀看電影、電視節目，支援4K Ultra HD畫質。" },
            "zh-cn": { title: "Netflix 1个月高级会员", description: "无限量观看电影、电视节目，支持4K Ultra HD画质。" }
        }
    },
    {
        id: 4,
        code: "COUPON-UBER-10",
        required_points: 200,
        total_quota: 200,
        remaining_quota: 198,
        image_url: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=500&auto=format&fit=crop&q=60",
        start_date: "2026-01-01T00:00",
        end_date: "2026-05-30T23:59", // Expired for demo
        status: "expired",
        translations: {
            en: { title: "Uber $10 Ride Discount", description: "Enjoy $10 off your next rides. Valid on UberX or Premium." },
            "zh-tw": { title: "Uber $10 乘車優惠券", description: "下一程 Uber 乘車抵減 $10，適用於優步所有車型。" },
            "zh-cn": { title: "Uber $10 乘车优惠券", description: "下一程 Uber 乘车抵减 $10，适用于优步所有车型。" }
        }
    }
];

// App State Management
let state = {
    currentUser: null,
    currentLanguage: 'en',
    currentFilter: 'all',
    users: [],
    coupons: [],
    redemptions: [],
    luckyDraws: [],
    transactions: [],
    spinning: false
};

// Initialize Storage
function initStorage() {
    if (!localStorage.getItem('v_users')) {
        localStorage.setItem('v_users', JSON.stringify([
            { id: 1, mobile: "+85291234567", password: "Password123", lang: "en", points: 1500, status: "active" }
        ]));
    }
    if (!localStorage.getItem('v_coupons')) {
        localStorage.setItem('v_coupons', JSON.stringify(defaultCoupons));
    }
    if (!localStorage.getItem('v_redemptions')) {
        localStorage.setItem('v_redemptions', JSON.stringify([]));
    }
    if (!localStorage.getItem('v_lucky_draws')) {
        localStorage.setItem('v_lucky_draws', JSON.stringify([]));
    }
    if (!localStorage.getItem('v_transactions')) {
        localStorage.setItem('v_transactions', JSON.stringify([]));
    }

    state.users = JSON.parse(localStorage.getItem('v_users'));
    state.coupons = JSON.parse(localStorage.getItem('v_coupons'));
    state.redemptions = JSON.parse(localStorage.getItem('v_redemptions'));
    state.luckyDraws = JSON.parse(localStorage.getItem('v_lucky_draws'));
    state.transactions = JSON.parse(localStorage.getItem('v_transactions'));
}

function updateStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

// Translate Functionality
function setLanguage(lang) {
    state.currentLanguage = lang;
    document.getElementById('lang-select').value = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) {
            if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                el.placeholder = i18n[lang][key];
            } else {
                el.textContent = i18n[lang][key];
            }
        }
    });

    // Refresh rendering to update localized content in dynamic elements
    renderCoupons();
    if (state.currentUser) {
        renderRedemptions();
    }
}

// Navigation & Screen Control
function showView(viewId) {
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(viewId).classList.add('active');
}

// Toast Notifications Helper
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3500);
}

// Form Switchers
document.getElementById('go-register-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('auth-login-form').style.display = 'none';
    document.getElementById('auth-register-form').style.display = 'block';
});

document.getElementById('go-login-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('auth-register-form').style.display = 'none';
    document.getElementById('auth-login-form').style.display = 'block';
});

// Authentication Handlers
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const mobile = document.getElementById('register-mobile').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPass = document.getElementById('register-confirm-password').value;
    const prefLang = document.getElementById('register-lang').value;

    if (password.length < 8) {
        showToast("Password must be at least 8 characters.", "danger");
        return;
    }
    if (password !== confirmPass) {
        showToast("Passwords do not match.", "danger");
        return;
    }

    const exist = state.users.find(u => u.mobile === mobile);
    if (exist) {
        showToast("Mobile number is already registered.", "danger");
        return;
    }

    const newUser = {
        id: state.users.length + 1,
        mobile,
        password, // stored plain for mock demo purposes
        lang: prefLang,
        points: 0,
        status: "active"
    };

    state.users.push(newUser);
    updateStorage('v_users', state.users);

    showToast("Registration successful! Please login.", "success");
    document.getElementById('register-form').reset();
    document.getElementById('auth-register-form').style.display = 'none';
    document.getElementById('auth-login-form').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const mobile = document.getElementById('login-mobile').value.trim();
    const password = document.getElementById('login-password').value;

    const user = state.users.find(u => u.mobile === mobile && u.password === password);
    if (!user) {
        showToast("Invalid mobile number or password.", "danger");
        return;
    }

    if (user.status !== 'active') {
        showToast("User account is suspended or inactive.", "danger");
        return;
    }

    state.currentUser = user;
    showToast("Signed in successfully!", "success");
    
    // Set UI to reflect language preferences
    setLanguage(user.lang);
    updateProfileUI();

    document.getElementById('logout-btn').style.display = 'inline-block';
    showView('view-dashboard');
});

document.getElementById('logout-btn').addEventListener('click', () => {
    state.currentUser = null;
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('login-form').reset();
    showView('view-auth');
});

function updateProfileUI() {
    if (!state.currentUser) return;
    document.getElementById('user-mobile-display').textContent = state.currentUser.mobile;
    document.getElementById('user-lang-display').textContent = state.currentUser.lang.toUpperCase();
    document.getElementById('user-points-display').textContent = state.currentUser.points;
    renderCoupons();
}

// Daily Lucky Draw Spin Logic
document.getElementById('draw-spin-btn').addEventListener('click', () => {
    if (state.spinning) return;
    if (!state.currentUser) return;

    const todayStr = new Date().toISOString().split('T')[0];
    const alreadyDrawn = state.luckyDraws.find(d => d.user_id === state.currentUser.id && d.draw_date === todayStr);

    if (alreadyDrawn) {
        const msg = i18n[state.currentLanguage].alert_already_drawn;
        document.getElementById('draw-status-msg').textContent = msg;
        document.getElementById('draw-status-msg').style.color = 'var(--danger)';
        showToast(msg, "warning");
        return;
    }

    state.spinning = true;
    document.getElementById('draw-status-msg').textContent = "";
    
    // Choose random point sector
    const sectors = [
        { points: 10, degree: 45 },   // conic section 0 - 90 deg (Gold/Blue border)
        { points: 20, degree: 135 },  // 90 - 180 deg
        { points: 50, degree: 225 },  // 180 - 270 deg
        { points: 100, degree: 315 }  // 270 - 360 deg
    ];

    const resultSector = sectors[Math.floor(Math.random() * sectors.length)];
    
    // Add multiple rotations + target angle
    const totalRotation = 360 * 5 - resultSector.degree; // Spin counter-clockwise to match pointer
    const wheel = document.getElementById('lucky-wheel');
    
    wheel.style.transform = `rotate(${totalRotation}deg)`;

    setTimeout(() => {
        // Award points
        state.currentUser.points += resultSector.points;
        
        // Save history & transactions ledger
        state.luckyDraws.push({
            id: state.luckyDraws.length + 1,
            user_id: state.currentUser.id,
            draw_date: todayStr,
            points_awarded: resultSector.points,
            created_at: new Date().toISOString()
        });

        state.transactions.push({
            id: state.transactions.length + 1,
            user_id: state.currentUser.id,
            transaction_type: 'lucky_draw',
            points: resultSector.points,
            reference_id: state.luckyDraws.length,
            description: `Daily Lucky Draw Award`,
            created_at: new Date().toISOString()
        });

        // Sync updates to users list & local storage
        const userIdx = state.users.findIndex(u => u.id === state.currentUser.id);
        state.users[userIdx] = state.currentUser;

        updateStorage('v_users', state.users);
        updateStorage('v_lucky_draws', state.luckyDraws);
        updateStorage('v_transactions', state.transactions);

        // Reset wheel animation instantly to base angle
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${360 - resultSector.degree}deg)`;
        setTimeout(() => {
            wheel.style.transition = 'transform 4s cubic-bezier(0.1, 0.8, 0.3, 1)';
        }, 50);

        // Update UI
        updateProfileUI();
        state.spinning = false;

        const successMsg = i18n[state.currentLanguage].alert_draw_success.replace("{points}", resultSector.points);
        document.getElementById('draw-status-msg').textContent = successMsg;
        document.getElementById('draw-status-msg').style.color = 'var(--success)';
        showToast(successMsg, "success");

    }, 4000);
});

// Render E-Coupon List
function renderCoupons() {
    const container = document.getElementById('coupons-container');
    container.innerHTML = "";

    const userPoints = state.currentUser ? state.currentUser.points : 0;
    const now = new Date();

    state.coupons.forEach(coupon => {
        // Localized strings
        const langCode = state.currentLanguage;
        const trans = coupon.translations[langCode] || coupon.translations['en'];

        // Determine if Coupon matches the selected filter status
        const isExpired = new Date(coupon.end_date) < now || coupon.status === 'expired';
        if (state.currentFilter === 'expired' && !isExpired) return;
        if (state.currentFilter === 'redeemable' && (isExpired || userPoints < coupon.required_points || coupon.remaining_quota <= 0 || coupon.status !== 'active')) return;

        // Button markup setup
        let btnText = i18n[langCode].btn_redeem;
        let btnDisabled = false;

        if (isExpired) {
            btnText = i18n[langCode].btn_expired;
            btnDisabled = true;
        } else if (coupon.status === 'disabled') {
            btnText = i18n[langCode].status_disabled;
            btnDisabled = true;
        } else if (coupon.remaining_quota <= 0) {
            btnText = i18n[langCode].btn_no_quota;
            btnDisabled = true;
        } else if (userPoints < coupon.required_points) {
            btnText = i18n[langCode].btn_points_short;
            btnDisabled = true;
        }

        const card = document.createElement('div');
        card.className = "coupon-card glass-panel";
        card.innerHTML = `
            <div class="coupon-img-wrapper">
                <img src="${coupon.image_url || 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500'}" class="coupon-img" alt="${trans.title}">
                <div class="coupon-tag">${coupon.remaining_quota} / ${coupon.total_quota} Left</div>
            </div>
            <div class="coupon-info">
                <div class="coupon-title">${trans.title}</div>
                <div class="coupon-desc">${trans.description}</div>
                <div style="font-size: 0.8rem; color: var(--text-secondary);">Expires: ${new Date(coupon.end_date).toLocaleDateString()}</div>
                <div class="coupon-footer">
                    <div class="points-cost">${coupon.required_points} pts</div>
                    <button class="btn-primary redeem-action-btn" data-id="${coupon.id}" ${btnDisabled ? 'disabled style="opacity: 0.6; cursor: not-allowed; box-shadow: none;"' : ''}>
                        ${btnText}
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Attach click events
    document.querySelectorAll('.redeem-action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            redeemCoupon(id);
        });
    });
}

// Handle Coupon Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        state.currentFilter = e.target.getAttribute('data-filter');
        renderCoupons();
    });
});

// Redeem Coupon Process
function redeemCoupon(couponId) {
    if (!state.currentUser) return;
    const couponIdx = state.coupons.findIndex(c => c.id === couponId);
    if (couponIdx === -1) return;

    const coupon = state.coupons[couponIdx];
    const now = new Date();

    // Validations
    if (coupon.status !== 'active' || now < new Date(coupon.start_date) || now > new Date(coupon.end_date)) {
        showToast("Coupon is not active or has expired.", "danger");
        return;
    }
    if (coupon.remaining_quota <= 0) {
        showToast("Out of quota.", "danger");
        return;
    }
    if (state.currentUser.points < coupon.required_points) {
        showToast("Insufficient points.", "danger");
        return;
    }

    // Process Points deduction and quota reduction
    state.currentUser.points -= coupon.required_points;
    coupon.remaining_quota -= 1;

    // Generate unique codes
    const dateStr = now.toISOString().split('T')[0].replace(/-/g, '');
    const randomHex = Math.random().toString(36).substring(2, 8).toUpperCase() + Math.random().toString(36).substring(2, 8).toUpperCase();
    const qrCodeVal = `RED-${dateStr}-${randomHex}`;

    const newRedemption = {
        id: state.redemptions.length + 1,
        user_id: state.currentUser.id,
        coupon_id: coupon.id,
        redemption_code: qrCodeVal,
        qr_code_value: qrCodeVal,
        points_deducted: coupon.required_points,
        status: "completed",
        created_at: now.toISOString()
    };

    state.redemptions.push(newRedemption);
    
    // Add ledger points transaction
    state.transactions.push({
        id: state.transactions.length + 1,
        user_id: state.currentUser.id,
        transaction_type: 'redemption',
        points: -coupon.required_points,
        reference_id: newRedemption.id,
        description: `Redeemed Coupon: ${coupon.code}`,
        created_at: now.toISOString()
    });

    // Update Storage
    const userIdx = state.users.findIndex(u => u.id === state.currentUser.id);
    state.users[userIdx] = state.currentUser;
    updateStorage('v_users', state.users);
    updateStorage('v_coupons', state.coupons);
    updateStorage('v_redemptions', state.redemptions);
    updateStorage('v_transactions', state.transactions);

    updateProfileUI();
    showToast(i18n[state.currentLanguage].alert_redeem_success, "success");

    // Open QR code modal directly
    openQRModal(newRedemption, coupon);
}

// Render Redemption History
function renderRedemptions() {
    const tableBody = document.getElementById('redemptions-history-table');
    tableBody.innerHTML = "";

    const userRedemptions = state.redemptions.filter(r => r.user_id === state.currentUser.id);

    if (userRedemptions.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-secondary);">No redemptions found.</td></tr>`;
        return;
    }

    userRedemptions.forEach(r => {
        const coupon = state.coupons.find(c => c.id === r.coupon_id);
        const langCode = state.currentLanguage;
        const couponTitle = coupon ? (coupon.translations[langCode]?.title || coupon.translations['en']?.title) : 'Unknown Coupon';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${couponTitle}</strong></td>
            <td style="color: var(--danger); font-weight:600;">-${r.points_deducted} pts</td>
            <td><code>${r.redemption_code}</code></td>
            <td>${new Date(r.created_at).toLocaleString()}</td>
            <td>
                <button class="btn-primary view-qr-btn" data-redemption-id="${r.id}" style="padding: 6px 12px; font-size: 0.85rem; box-shadow: none;">
                    ${i18n[langCode].btn_view_qr}
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    document.querySelectorAll('.view-qr-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const rId = parseInt(e.target.getAttribute('data-redemption-id'));
            const redemption = state.redemptions.find(r => r.id === rId);
            const coupon = state.coupons.find(c => c.id === redemption.coupon_id);
            openQRModal(redemption, coupon);
        });
    });
}

// View Switching handlers
document.getElementById('view-redemptions-btn').addEventListener('click', () => {
    renderRedemptions();
    showView('view-redemptions');
});

document.getElementById('back-to-dash-btn').addEventListener('click', () => {
    updateProfileUI();
    showView('view-dashboard');
});

document.getElementById('logo-btn').addEventListener('click', () => {
    if (state.currentUser) {
        updateProfileUI();
        showView('view-dashboard');
    } else {
        showView('view-auth');
    }
});

// QR Modal Render Functions
function openQRModal(redemption, coupon) {
    const langCode = state.currentLanguage;
    const trans = coupon.translations[langCode] || coupon.translations['en'];

    document.getElementById('modal-title').textContent = trans.title;
    document.getElementById('modal-body-content').innerHTML = `
        <p style="color: var(--text-secondary); margin-bottom: 15px;">${trans.description}</p>
        <p><strong>Code:</strong> <code>${coupon.code}</code></p>
        <p><strong>Expiry:</strong> ${new Date(coupon.end_date).toLocaleDateString()}</p>
    `;

    // Show QR code
    document.getElementById('modal-qr-section').style.display = 'block';
    document.getElementById('qr-string-val').textContent = redemption.qr_code_value;

    // Render Canvas QR
    new QRious({
        element: document.getElementById('qr-canvas'),
        value: redemption.qr_code_value,
        size: 200,
        background: '#ffffff',
        foreground: '#0f172a',
        level: 'H'
    });

    document.getElementById('qr-modal').classList.add('active');
}

// Modal Close Handlers
document.getElementById('modal-close-btn').addEventListener('click', () => {
    document.getElementById('qr-modal').classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('qr-modal')) {
        document.getElementById('qr-modal').classList.remove('active');
    }
});

// ================= ADMIN CMS CONSOLE LOGIC =================

document.getElementById('cms-toggle-btn').addEventListener('click', () => {
    renderCMSCoupons();
    renderCMSReports();
    showView('view-cms');
});

document.getElementById('cms-exit-btn').addEventListener('click', () => {
    if (state.currentUser) {
        updateProfileUI();
        showView('view-dashboard');
    } else {
        showView('view-auth');
    }
});

// Render CMS Coupon List
function renderCMSCoupons() {
    const tbody = document.getElementById('cms-coupons-table-body');
    tbody.innerHTML = "";

    state.coupons.forEach(c => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><code>${c.code}</code></td>
            <td>${c.translations.en.title}</td>
            <td><strong>${c.required_points}</strong></td>
            <td>${c.remaining_quota} / ${c.total_quota}</td>
            <td><span class="status-badge status-${c.status}">${c.status.toUpperCase()}</span></td>
            <td>
                <button class="btn-primary cms-edit-btn" data-id="${c.id}" style="padding: 6px 12px; font-size: 0.85rem; box-shadow: none;">Edit</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    document.querySelectorAll('.cms-edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            const coupon = state.coupons.find(c => c.id === id);
            editCMSCoupon(coupon);
        });
    });
}

// Edit Coupon in CMS form
function editCMSCoupon(coupon) {
    document.getElementById('form-action-title').textContent = `Edit Coupon: ${coupon.code}`;
    document.getElementById('cms-coupon-id').value = coupon.id;
    document.getElementById('cms-coupon-code').value = coupon.code;
    document.getElementById('cms-coupon-points').value = coupon.required_points;
    document.getElementById('cms-coupon-quota').value = coupon.total_quota;
    document.getElementById('cms-coupon-remaining').value = coupon.remaining_quota;
    document.getElementById('cms-coupon-image').value = coupon.image_url;
    document.getElementById('cms-coupon-start').value = coupon.start_date;
    document.getElementById('cms-coupon-end').value = coupon.end_date;
    document.getElementById('cms-coupon-status').value = coupon.status;

    // Fill translations
    document.getElementById('cms-title-en').value = coupon.translations.en.title;
    document.getElementById('cms-desc-en').value = coupon.translations.en.description;
    
    document.getElementById('cms-title-tw').value = coupon.translations['zh-tw']?.title || "";
    document.getElementById('cms-desc-tw').value = coupon.translations['zh-tw']?.description || "";
    
    document.getElementById('cms-title-cn').value = coupon.translations['zh-cn']?.title || "";
    document.getElementById('cms-desc-cn').value = coupon.translations['zh-cn']?.description || "";
}

// Cancel CMS editing
document.getElementById('cms-form-cancel').addEventListener('click', () => {
    resetCMSForm();
});

function resetCMSForm() {
    document.getElementById('form-action-title').textContent = "Create New E-Coupon";
    document.getElementById('coupon-cms-form').reset();
    document.getElementById('cms-coupon-id').value = "";
}

// Save CMS Coupon (Create or Update)
document.getElementById('coupon-cms-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const idVal = document.getElementById('cms-coupon-id').value;
    const code = document.getElementById('cms-coupon-code').value.trim();
    const required_points = parseInt(document.getElementById('cms-coupon-points').value);
    const total_quota = parseInt(document.getElementById('cms-coupon-quota').value);
    const remaining_quota = parseInt(document.getElementById('cms-coupon-remaining').value);
    const image_url = document.getElementById('cms-coupon-image').value.trim();
    const start_date = document.getElementById('cms-coupon-start').value;
    const end_date = document.getElementById('cms-coupon-end').value;
    const status = document.getElementById('cms-coupon-status').value;

    const translations = {
        en: {
            title: document.getElementById('cms-title-en').value.trim(),
            description: document.getElementById('cms-desc-en').value.trim()
        },
        "zh-tw": {
            title: document.getElementById('cms-title-tw').value.trim(),
            description: document.getElementById('cms-desc-tw').value.trim()
        },
        "zh-cn": {
            title: document.getElementById('cms-title-cn').value.trim(),
            description: document.getElementById('cms-desc-cn').value.trim()
        }
    };

    if (idVal) {
        // Edit Existing
        const idx = state.coupons.findIndex(c => c.id === parseInt(idVal));
        if (idx !== -1) {
            state.coupons[idx] = {
                ...state.coupons[idx],
                code, required_points, total_quota, remaining_quota, image_url, start_date, end_date, status, translations
            };
            showToast("Coupon updated successfully.", "success");
        }
    } else {
        // Create New
        const newCoupon = {
            id: state.coupons.length + 1,
            code, required_points, total_quota, remaining_quota, image_url, start_date, end_date, status, translations
        };
        state.coupons.push(newCoupon);
        showToast("Coupon created successfully.", "success");
    }

    updateStorage('v_coupons', state.coupons);
    resetCMSForm();
    renderCMSCoupons();
});

// Render System Redemption Audit Reports
function renderCMSReports() {
    const tbody = document.getElementById('cms-reports-table-body');
    tbody.innerHTML = "";

    if (state.redemptions.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-secondary);">No redemptions logged yet.</td></tr>`;
        return;
    }

    state.redemptions.forEach(r => {
        const user = state.users.find(u => u.id === r.user_id);
        const coupon = state.coupons.find(c => c.id === r.coupon_id);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user ? user.mobile : 'Unknown'}</td>
            <td>${coupon ? coupon.code : 'Unknown'}</td>
            <td><code>${r.redemption_code}</code></td>
            <td style="color: var(--danger); font-weight:600;">-${r.points_deducted} pts</td>
            <td>${new Date(r.created_at).toLocaleString()}</td>
        `;
        tbody.appendChild(row);
    });
}

// Initial Setups
document.getElementById('lang-select').addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

// Bootstrap application state
initStorage();
setLanguage('en');
resetCMSForm();
updateProfileUI();
