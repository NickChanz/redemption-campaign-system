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

// App State Management
let state = {
    currentUser: null,
    currentLanguage: 'en',
    currentFilter: 'all',
    coupons: [],
    redemptions: [],
    spinning: false
};

// API Fetch Helper
const API_PREFIX = '/api';

async function apiFetch(url, options = {}) {
    const token = localStorage.getItem('auth_token');
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...options.headers,
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(`${API_PREFIX}${url}`, {
        ...options,
        headers,
    });
    
    if (response.status === 401) {
        localStorage.removeItem('auth_token');
        state.currentUser = null;
        document.getElementById('logout-btn').style.display = 'none';
        showView('view-auth');
        showToast("Session expired. Please sign in again.", "danger");
        throw new Error("Unauthorized");
    }

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'API request failed');
    }
    return data;
}

// Bootstrap Application on Launch
async function bootstrapApp() {
    const token = localStorage.getItem('auth_token');
    if (token) {
        try {
            await fetchProfile();
            document.getElementById('logout-btn').style.display = 'inline-block';
            showView('view-dashboard');
        } catch (err) {
            localStorage.removeItem('auth_token');
            showView('view-auth');
        }
    } else {
        showView('view-auth');
    }
}

// Fetch Profile Details
async function fetchProfile() {
    try {
        const res = await apiFetch('/profile');
        state.currentUser = res.data;
        state.currentLanguage = res.data.preferred_language || 'en';
        setLanguage(state.currentLanguage);
        updateProfileUI();
    } catch (err) {
        showToast("Failed to fetch profile info.", "danger");
        throw err;
    }
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

    fetchCoupons();
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
document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const mobile_number = document.getElementById('register-mobile').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPass = document.getElementById('register-confirm-password').value;
    const preferred_language = document.getElementById('register-lang').value;

    if (password.length < 8) {
        showToast("Password must be at least 8 characters.", "danger");
        return;
    }
    if (password !== confirmPass) {
        showToast("Passwords do not match.", "danger");
        return;
    }

    try {
        await apiFetch('/register', {
            method: 'POST',
            body: JSON.stringify({
                mobile_number,
                password,
                password_confirmation: confirmPass,
                preferred_language
            })
        });
        showToast("Registration successful! Please login.", "success");
        document.getElementById('register-form').reset();
        document.getElementById('auth-register-form').style.display = 'none';
        document.getElementById('auth-login-form').style.display = 'block';
    } catch (err) {
        showToast(err.message, "danger");
    }
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const mobile_number = document.getElementById('login-mobile').value.trim();
    const password = document.getElementById('login-password').value;

    try {
        const res = await apiFetch('/login', {
            method: 'POST',
            body: JSON.stringify({ mobile_number, password })
        });
        
        localStorage.setItem('auth_token', res.token);
        state.currentUser = res.user;
        state.currentLanguage = res.user.preferred_language || 'en';
        setLanguage(state.currentLanguage);
        
        showToast("Signed in successfully!", "success");
        document.getElementById('logout-btn').style.display = 'inline-block';
        updateProfileUI();
        showView('view-dashboard');
    } catch (err) {
        showToast(err.message, "danger");
    }
});

document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('auth_token');
    state.currentUser = null;
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('login-form').reset();
    showView('view-auth');
});

function updateProfileUI() {
    if (!state.currentUser) return;
    document.getElementById('user-mobile-display').textContent = state.currentUser.mobile_number;
    document.getElementById('user-lang-display').textContent = state.currentUser.preferred_language.toUpperCase();
    document.getElementById('user-points-display').textContent = state.currentUser.total_points;
    fetchCoupons();
}

// Daily Lucky Draw Spin Logic
document.getElementById('draw-spin-btn').addEventListener('click', async () => {
    if (state.spinning) return;
    if (!state.currentUser) return;

    state.spinning = true;
    document.getElementById('draw-status-msg').textContent = "";

    try {
        const res = await apiFetch('/lucky-draw', { method: 'POST' });
        const awardedPoints = res.data.awarded_points;

        // Choose corresponding wheel sector degree
        const sectors = {
            10: 45,
            20: 135,
            50: 225,
            100: 315
        };
        const targetDegree = sectors[awardedPoints] || 45;
        const totalRotation = 360 * 5 - targetDegree;

        const wheel = document.getElementById('lucky-wheel');
        wheel.style.transform = `rotate(${totalRotation}deg)`;

        setTimeout(() => {
            // Update state points balance
            state.currentUser.total_points = res.data.current_balance;

            // Reset wheel position animation
            wheel.style.transition = 'none';
            wheel.style.transform = `rotate(${360 - targetDegree}deg)`;
            setTimeout(() => {
                wheel.style.transition = 'transform 4s cubic-bezier(0.1, 0.8, 0.3, 1)';
            }, 50);

            // Update UI
            updateProfileUI();
            state.spinning = false;

            const successMsg = i18n[state.currentLanguage].alert_draw_success.replace("{points}", awardedPoints);
            document.getElementById('draw-status-msg').textContent = successMsg;
            document.getElementById('draw-status-msg').style.color = 'var(--success)';
            showToast(successMsg, "success");

        }, 4000);

    } catch (err) {
        state.spinning = false;
        const errMsg = err.message === "Already participated in today's draw." 
            ? i18n[state.currentLanguage].alert_already_drawn 
            : err.message;
        document.getElementById('draw-status-msg').textContent = errMsg;
        document.getElementById('draw-status-msg').style.color = 'var(--danger)';
        showToast(errMsg, "warning");
    }
});

// Fetch E-Coupon List
async function fetchCoupons() {
    if (!state.currentUser) return;
    try {
        const res = await apiFetch(`/coupons?language=${state.currentLanguage}&filter=${state.currentFilter}`);
        state.coupons = res.data;
        renderCouponsList();
    } catch (err) {
        showToast("Failed to fetch coupons.", "danger");
    }
}

// Render E-Coupon List
function renderCouponsList() {
    const container = document.getElementById('coupons-container');
    container.innerHTML = "";

    const userPoints = state.currentUser ? state.currentUser.total_points : 0;
    const langCode = state.currentLanguage;

    state.coupons.forEach(coupon => {
        let btnText = i18n[langCode].btn_redeem;
        let btnDisabled = false;

        if (!coupon.is_redeemable) {
            btnDisabled = true;
            if (coupon.remaining_quota <= 0) {
                btnText = i18n[langCode].btn_no_quota;
            } else if (userPoints < coupon.required_points) {
                btnText = i18n[langCode].btn_points_short;
            } else {
                btnText = i18n[langCode].btn_expired;
            }
        }

        const card = document.createElement('div');
        card.className = "coupon-card glass-panel";
        card.innerHTML = `
            <div class="coupon-img-wrapper">
                <img src="${coupon.image_url || 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500'}" class="coupon-img" alt="${coupon.title}">
                <div class="coupon-tag">${coupon.remaining_quota} Left</div>
            </div>
            <div class="coupon-info">
                <div class="coupon-title">${coupon.title}</div>
                <div class="coupon-desc">${coupon.description}</div>
                <div style="font-size: 0.8rem; color: var(--text-secondary);">Expires: ${new Date(coupon.expiry_date).toLocaleDateString()}</div>
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
        fetchCoupons();
    });
});

// Redeem Coupon Process
async function redeemCoupon(couponId) {
    try {
        const res = await apiFetch(`/coupons/${couponId}/redeem`, { method: 'POST' });
        state.currentUser.total_points = res.data.remaining_points;
        updateProfileUI();
        
        showToast(i18n[state.currentLanguage].alert_redeem_success, "success");
        
        // Open QR modal directly with returned redemption info
        const coupon = state.coupons.find(c => c.id === couponId);
        openQRModal({
            qr_code_value: res.data.qr_code_value,
            redemption_code: res.data.redemption_code
        }, coupon);
    } catch (err) {
        showToast(err.message, "danger");
    }
}

// Fetch and Render Redemption History
async function renderRedemptions() {
    const tableBody = document.getElementById('redemptions-history-table');
    tableBody.innerHTML = "";

    try {
        const res = await apiFetch(`/redemptions?language=${state.currentLanguage}`);
        state.redemptions = res.data;

        if (state.redemptions.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-secondary);">No redemptions found.</td></tr>`;
            return;
        }

        state.redemptions.forEach(r => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><strong>${r.coupon.title}</strong></td>
                <td style="color: var(--danger); font-weight:600;">-${r.points_deducted} pts</td>
                <td><code>${r.redemption_code}</code></td>
                <td>${new Date(r.created_at).toLocaleString()}</td>
                <td>
                    <button class="btn-primary view-qr-btn" data-redemption-id="${r.id}" style="padding: 6px 12px; font-size: 0.85rem; box-shadow: none;">
                        ${i18n[state.currentLanguage].btn_view_qr}
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });

        document.querySelectorAll('.view-qr-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const rId = parseInt(e.target.getAttribute('data-redemption-id'));
                const redemption = state.redemptions.find(r => r.id === rId);
                openQRModal(redemption, redemption.coupon);
            });
        });
    } catch (err) {
        showToast("Failed to fetch redemption history.", "danger");
    }
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
    document.getElementById('modal-title').textContent = coupon.title;
    document.getElementById('modal-body-content').innerHTML = `
        <p style="color: var(--text-secondary); margin-bottom: 15px;">${coupon.description || ''}</p>
        <p><strong>Code:</strong> <code>${coupon.code || ''}</code></p>
    `;

    document.getElementById('modal-qr-section').style.display = 'block';
    document.getElementById('qr-string-val').textContent = redemption.qr_code_value;

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
async function renderCMSCoupons() {
    const tbody = document.getElementById('cms-coupons-table-body');
    tbody.innerHTML = "";

    try {
        const res = await apiFetch('/admin/coupons');
        const coupons = res.data;

        coupons.forEach(c => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><code>${c.code}</code></td>
                <td>${c.translations.en || ''}</td>
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
            btn.addEventListener('click', async (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                try {
                    const res = await apiFetch(`/admin/coupons/${id}`);
                    editCMSCoupon(res.data);
                } catch (err) {
                    showToast("Failed to fetch coupon details.", "danger");
                }
            });
        });
    } catch (err) {
        showToast("Failed to load admin coupons.", "danger");
    }
}

// Edit Coupon in CMS form
function editCMSCoupon(coupon) {
    document.getElementById('form-action-title').textContent = `Edit Coupon: ${coupon.code}`;
    document.getElementById('cms-coupon-id').value = coupon.id;
    document.getElementById('cms-coupon-code').value = coupon.code;
    document.getElementById('cms-coupon-points').value = coupon.required_points;
    document.getElementById('cms-coupon-quota').value = coupon.total_quota;
    document.getElementById('cms-coupon-remaining').value = coupon.remaining_quota;
    document.getElementById('cms-coupon-image').value = coupon.image_url || '';
    document.getElementById('cms-coupon-start').value = coupon.start_date ? coupon.start_date.slice(0, 16) : '';
    document.getElementById('cms-coupon-end').value = coupon.end_date ? coupon.end_date.slice(0, 16) : '';
    document.getElementById('cms-coupon-status').value = coupon.status;

    // Fill translations from keyed translations object
    const translations = coupon.translations || {};
    
    document.getElementById('cms-title-en').value = translations.en ? translations.en.title : '';
    document.getElementById('cms-desc-en').value = translations.en ? translations.en.description : '';
    
    document.getElementById('cms-title-tw').value = translations['zh-tw'] ? translations['zh-tw'].title : '';
    document.getElementById('cms-desc-tw').value = translations['zh-tw'] ? translations['zh-tw'].description : '';
    
    document.getElementById('cms-title-cn').value = translations['zh-cn'] ? translations['zh-cn'].title : '';
    document.getElementById('cms-desc-cn').value = translations['zh-cn'] ? translations['zh-cn'].description : '';
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
document.getElementById('coupon-cms-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const idVal = document.getElementById('cms-coupon-id').value;
    const code = document.getElementById('cms-coupon-code').value.trim();
    const required_points = parseInt(document.getElementById('cms-coupon-points').value);
    const total_quota = parseInt(document.getElementById('cms-coupon-quota').value);
    const image_url = document.getElementById('cms-coupon-image').value.trim();
    const start_date = document.getElementById('cms-coupon-start').value;
    const end_date = document.getElementById('cms-coupon-end').value;
    const status = document.getElementById('cms-coupon-status').value;

    const translations = [
        {
            language_code: 'en',
            title: document.getElementById('cms-title-en').value.trim(),
            description: document.getElementById('cms-desc-en').value.trim()
        },
        {
            language_code: 'zh-tw',
            title: document.getElementById('cms-title-tw').value.trim(),
            description: document.getElementById('cms-desc-tw').value.trim()
        },
        {
            language_code: 'zh-cn',
            title: document.getElementById('cms-title-cn').value.trim(),
            description: document.getElementById('cms-desc-cn').value.trim()
        }
    ];

    try {
        if (idVal) {
            // Edit Existing (Note: Admin API allows patching status, quota, points, image, and translations)
            await apiFetch(`/admin/coupons/${idVal}`, {
                method: 'PUT',
                body: JSON.stringify({
                    required_points,
                    total_quota,
                    status,
                    image_url,
                    translations
                })
            });
            showToast("Coupon updated successfully.", "success");
        } else {
            // Create New
            await apiFetch('/admin/coupons', {
                method: 'POST',
                body: JSON.stringify({
                    code,
                    required_points,
                    total_quota,
                    image_url,
                    start_date,
                    end_date,
                    status,
                    translations
                })
            });
            showToast("Coupon created successfully.", "success");
        }

        resetCMSForm();
        renderCMSCoupons();
    } catch (err) {
        showToast(err.message, "danger");
    }
});

// Render System Redemption Audit Reports
async function renderCMSReports() {
    const tbody = document.getElementById('cms-reports-table-body');
    tbody.innerHTML = "";

    try {
        const res = await apiFetch('/admin/redemptions');
        const reports = res.data;

        if (reports.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-secondary);">No redemptions logged yet.</td></tr>`;
            return;
        }

        reports.forEach(r => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${r.user.mobile_number}</td>
                <td>${r.coupon.code}</td>
                <td><code>${r.redemption_code}</code></td>
                <td style="color: var(--danger); font-weight:600;">-${r.points_deducted} pts</td>
                <td>${new Date(r.created_at).toLocaleString()}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (err) {
        showToast("Failed to load audit reports.", "danger");
    }
}

// Initial Setups
document.getElementById('lang-select').addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

// Bootstrap application state
bootstrapApp();
resetCMSForm();
