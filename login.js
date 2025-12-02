<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ashatamangal Matrimony - Login</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            display: flex;
            min-height: 100vh;
            background: linear-gradient(135deg, #e3f2fd 0%, #f5f5f5 100%);
        }

        .left-section {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            position: relative;
            overflow: hidden;
        }

        .decorative-circle {
            position: absolute;
            border-radius: 50%;
            opacity: 0.6;
        }

        .circle-1 {
            width: 300px;
            height: 300px;
            background: #64B5F6;
            bottom: -100px;
            left: -100px;
        }

        .circle-2 {
            width: 150px;
            height: 150px;
            background: #FFB74D;
            top: 50px;
            right: 100px;
        }

        .circle-3 {
            width: 100px;
            height: 100px;
            background: #FF8A80;
            top: 200px;
            right: 250px;
        }

        .circle-4 {
            width: 80px;
            height: 80px;
            background: #4FC3F7;
            bottom: 150px;
            right: 150px;
        }

        .hero-card {
            background: white;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 450px;
            position: relative;
            z-index: 1;
        }

        .hero-image {
            width: 100%;
            max-width: 300px;
            margin-bottom: 20px;
        }

        .hero-card h1 {
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 10px;
        }

        .hero-card p {
            font-size: 1.2rem;
            color: #666;
        }

        .code-tag {
            position: absolute;
            background: #2C3E50;
            color: #4FC3F7;
            padding: 8px 16px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .tag-1 {
            top: 20px;
            left: 20px;
        }

        .tag-2 {
            bottom: 80px;
            right: 30px;
        }

        .right-section {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            background: #FFF9F0;
        }

        .login-container {
            background: white;
            border-radius: 20px;
            padding: 50px 40px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
            width: 100%;
            max-width: 450px;
        }

        .logo-container {
            text-align: center;
            margin-bottom: 30px;
        }

        .logo {
            width: 180px;
            margin-bottom: 10px;
        }

        .logo-text {
            color: #1976D2;
            font-size: 2rem;
            font-weight: bold;
        }

        h2 {
            font-size: 2rem;
            color: #333;
            margin-bottom: 10px;
        }

        .subtitle {
            color: #666;
            margin-bottom: 30px;
        }

        .form-group {
            margin-bottom: 25px;
        }

        label {
            display: block;
            color: #333;
            font-weight: 500;
            margin-bottom: 8px;
        }

        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 14px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }

        input[type="email"]:focus,
        input[type="password"]:focus {
            outline: none;
            border-color: #1976D2;
        }

        .error-message {
            color: #d32f2f;
            font-size: 0.85rem;
            margin-top: 5px;
            display: none;
        }

        .error-message.show {
            display: block;
        }

        input.error {
            border-color: #d32f2f;
        }

        .password-wrapper {
            position: relative;
        }

        .toggle-password {
            position: absolute;
            right: 14px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            color: #666;
            font-size: 1.2rem;
        }

        .form-options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
        }

        .remember-me {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .remember-me input[type="checkbox"] {
            width: 18px;
            height: 18px;
            cursor: pointer;
        }

        .remember-me label {
            margin: 0;
            font-weight: normal;
            cursor: pointer;
        }

        .forgot-password {
            color: #1976D2;
            text-decoration: none;
            font-weight: 500;
        }

        .forgot-password:hover {
            text-decoration: underline;
        }

        .login-btn {
            width: 100%;
            padding: 14px;
            background: #e0e0e0;
            color: #999;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            cursor: not-allowed;
            transition: all 0.3s;
        }

        .login-btn.active {
            background: linear-gradient(135deg, #1976D2 0%, #42A5F5 100%);
            color: white;
            cursor: pointer;
        }

        .login-btn.active:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(25, 118, 210, 0.3);
        }

        .language-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border: 2px solid #1976D2;
            color: #1976D2;
            padding: 10px 20px;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
            z-index: 1000;
        }

        .language-btn:hover {
            background: #1976D2;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(25, 118, 210, 0.3);
        }

        .language-dropdown {
            position: fixed;
            top: 70px;
            right: 20px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            padding: 10px;
            display: none;
            z-index: 1000;
            min-width: 200px;
        }

        .language-dropdown.show {
            display: block;
            animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .language-option {
            padding: 12px 16px;
            cursor: pointer;
            border-radius: 8px;
            transition: background 0.2s;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.95rem;
        }

        .language-option:hover {
            background: #f5f5f5;
        }

        .language-option.active {
            background: #E3F2FD;
            color: #1976D2;
            font-weight: 600;
        }

        .language-flag {
            font-size: 1.5rem;
        }

        @media (max-width: 968px) {
            body {
                flex-direction: column;
            }

            .left-section {
                display: none;
            }

            .right-section {
                background: linear-gradient(135deg, #e3f2fd 0%, #f5f5f5 100%);
            }
        }
    </style>
</head>
<body>
    <button class="language-btn" id="languageBtn">
        <span id="currentFlag">🇬🇧</span>
        <span id="currentLang">English</span>
        <span style="font-size: 0.8rem;">▼</span>
    </button>

    <div class="language-dropdown" id="languageDropdown">
        <div class="language-option active" data-lang="en" data-flag="🇬🇧">
            <span class="language-flag">🇬🇧</span>
            <span>English</span>
        </div>
        <div class="language-option" data-lang="hi" data-flag="🇮🇳">
            <span class="language-flag">🇮🇳</span>
            <span>हिंदी (Hindi)</span>
        </div>
        <div class="language-option" data-lang="mr" data-flag="🇮🇳">
            <span class="language-flag">🇮🇳</span>
            <span>मराठी (Marathi)</span>
        </div>
        <div class="language-option" data-lang="ta" data-flag="🇮🇳">
            <span class="language-flag">🇮🇳</span>
            <span>தமிழ் (Tamil)</span>
        </div>
        <div class="language-option" data-lang="te" data-flag="🇮🇳">
            <span class="language-flag">🇮🇳</span>
            <span>తెలుగు (Telugu)</span>
        </div>
        <div class="language-option" data-lang="sa" data-flag="🕉️">
            <span class="language-flag">🕉️</span>
            <span>संस्कृत (Sanskrit)</span>
        </div>
    </div>

    <div class="left-section">
        <div class="decorative-circle circle-1"></div>
        <div class="decorative-circle circle-2"></div>
        <div class="decorative-circle circle-3"></div>
        <div class="decorative-circle circle-4"></div>
        
        <div class="code-tag tag-1">&lt;code /&gt;</div>
        <div class="code-tag tag-2">function()</div>
        
        <div class="hero-card">
            <div style="font-size: 120px; margin-bottom: 20px;">💑</div>
            <h1>Ashatamangal</h1>
            <p>Find Your Perfect Match</p>
        </div>
    </div>

    <div class="right-section">
        <div class="login-container">
            <div class="logo-container">
                <div class="logo-text">ashatamangal</div>
            </div>

            <h2>Login</h2>
            <p class="subtitle">Enter your credentials to start</p>

            <form id="loginForm">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Eg: john@gmail.com"
                        autocomplete="email"
                    >
                    <div class="error-message" id="emailError">Email is required</div>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <div class="password-wrapper">
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Eg: Abc@1234"
                            autocomplete="current-password"
                        >
                        <button type="button" class="toggle-password" id="togglePassword">👁️</button>
                    </div>
                    <div class="error-message" id="passwordError">Password is required</div>
                </div>

                <div class="form-options">
                    <div class="remember-me">
                        <input type="checkbox" id="rememberMe">
                        <label for="rememberMe">Remember me?</label>
                    </div>
                    <a href="#" class="forgot-password">Forgot Password?</a>
                </div>

                <button type="submit" class="login-btn" id="loginBtn">Login</button>
            </form>
        </div>
    </div>

    <script>
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const loginBtn = document.getElementById('loginBtn');
        const loginForm = document.getElementById('loginForm');
        const togglePassword = document.getElementById('togglePassword');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        const currentFlag = document.getElementById('currentFlag');
        const currentLang = document.getElementById('currentLang');
        const languageOptions = document.querySelectorAll('.language-option');

        // Translations object
        const translations = {
            en: {
                heroTitle: 'Ashatamangal',
                heroSubtitle: 'Find Your Perfect Match',
                loginTitle: 'Login',
                loginSubtitle: 'Enter your credentials to start',
                emailLabel: 'Email',
                emailPlaceholder: 'Eg: john@gmail.com',
                emailError: 'Email is required',
                passwordLabel: 'Password',
                passwordPlaceholder: 'Eg: Abc@1234',
                passwordError: 'Password is required',
                rememberMe: 'Remember me?',
                forgotPassword: 'Forgot Password?',
                loginButton: 'Login',
                successMessage: 'Login successful! Welcome to Ashatamangal Matrimony.'
            },
            hi: {
                heroTitle: 'अष्टमंगल',
                heroSubtitle: 'अपना आदर्श साथी खोजें',
                loginTitle: 'लॉगिन',
                loginSubtitle: 'शुरू करने के लिए अपनी जानकारी दर्ज करें',
                emailLabel: 'ईमेल',
                emailPlaceholder: 'उदा: john@gmail.com',
                emailError: 'ईमेल आवश्यक है',
                passwordLabel: 'पासवर्ड',
                passwordPlaceholder: 'उदा: Abc@1234',
                passwordError: 'पासवर्ड आवश्यक है',
                rememberMe: 'मुझे याद रखें?',
                forgotPassword: 'पासवर्ड भूल गए?',
                loginButton: 'लॉगिन',
                successMessage: 'लॉगिन सफल! अष्टमंगल मैट्रिमोनी में आपका स्वागत है।'
            },
            mr: {
                heroTitle: 'अष्टमंगल',
                heroSubtitle: 'तुमचा परिपूर्ण जोडीदार शोधा',
                loginTitle: 'लॉगिन',
                loginSubtitle: 'सुरू करण्यासाठी तुमची माहिती प्रविष्ट करा',
                emailLabel: 'ईमेल',
                emailPlaceholder: 'उदा: john@gmail.com',
                emailError: 'ईमेल आवश्यक आहे',
                passwordLabel: 'पासवर्ड',
                passwordPlaceholder: 'उदा: Abc@1234',
                passwordError: 'पासवर्ड आवश्यक आहे',
                rememberMe: 'मला लक्षात ठेवा?',
                forgotPassword: 'पासवर्ड विसरलात?',
                loginButton: 'लॉगिन',
                successMessage: 'लॉगिन यशस्वी! अष्टमंगल मॅट्रिमोनीमध्ये तुमचे स्वागत आहे।'
            },
            ta: {
                heroTitle: 'அஷ்டமங்கல்',
                heroSubtitle: 'உங்கள் சரியான துணையைக் கண்டறியுங்கள்',
                loginTitle: 'உள்நுழைவு',
                loginSubtitle: 'தொடங்க உங்கள் விவரங்களை உள்ளிடவும்',
                emailLabel: 'மின்னஞ்சல்',
                emailPlaceholder: 'எ.கா: john@gmail.com',
                emailError: 'மின்னஞ்சல் தேவை',
                passwordLabel: 'கடவுச்சொல்',
                passwordPlaceholder: 'எ.கா: Abc@1234',
                passwordError: 'கடவுச்சொல் தேவை',
                rememberMe: 'என்னை நினைவில் வைத்திருக்கவா?',
                forgotPassword: 'கடவுச்சொல்லை மறந்துவிட்டீர்களா?',
                loginButton: 'உள்நுழைவு',
                successMessage: 'உள்நுழைவு வெற்றிகரமாக! அஷ்டமங்கல் மேட்ரிமோனிக்கு வரவேற்கிறோம்.'
            },
            te: {
                heroTitle: 'అష్టమంగల్',
                heroSubtitle: 'మీ సరైన భాగస్వామిని కనుగొనండి',
                loginTitle: 'లాగిన్',
                loginSubtitle: 'ప్రారంభించడానికి మీ వివరాలను నమోదు చేయండి',
                emailLabel: 'ఇమెయిల్',
                emailPlaceholder: 'ఉదా: john@gmail.com',
                emailError: 'ఇమెయిల్ అవసరం',
                passwordLabel: 'పాస్‌వర్డ్',
                passwordPlaceholder: 'ఉదా: Abc@1234',
                passwordError: 'పాస్‌వర్డ్ అవసరం',
                rememberMe: 'నన్ను గుర్తుంచుకోండి?',
                forgotPassword: 'పాస్‌వర్డ్ మర్చిపోయారా?',
                loginButton: 'లాగిన్',
                successMessage: 'లాగిన్ విజయవంతమైంది! అష్టమంగల్ మ్యాట్రిమోనీకి స్వాగతం.'
            },
            sa: {
                heroTitle: 'अष्टमङ्गलम्',
                heroSubtitle: 'स्वस्य परिपूर्णं जीवनसाथिनं अन्विष्यताम्',
                loginTitle: 'प्रवेशः',
                loginSubtitle: 'आरम्भार्थं स्वविवरणानि प्रविशन्तु',
                emailLabel: 'विद्युत्पत्रम्',
                emailPlaceholder: 'उदा: john@gmail.com',
                emailError: 'विद्युत्पत्रम् आवश्यकम्',
                passwordLabel: 'गुप्तशब्दः',
                passwordPlaceholder: 'उदा: Abc@1234',
                passwordError: 'गुप्तशब्दः आवश्यकः',
                rememberMe: 'मां स्मरन्तु?',
                forgotPassword: 'गुप्तशब्दः विस्मृतः?',
                loginButton: 'प्रवेशः',
                successMessage: 'प्रवेशः सफलः! अष्टमङ्गल-विवाहमण्डपे स्वागतम्।'
            }
        };

        // Function to update page content
        function updatePageLanguage(lang) {
            const t = translations[lang];
            
            // Update hero section
            document.querySelector('.hero-card h1').textContent = t.heroTitle;
            document.querySelector('.hero-card p').textContent = t.heroSubtitle;
            
            // Update login section
            document.querySelector('.login-container h2').textContent = t.loginTitle;
            document.querySelector('.subtitle').textContent = t.loginSubtitle;
            
            // Update form labels and placeholders
            document.querySelector('label[for="email"]').textContent = t.emailLabel;
            emailInput.placeholder = t.emailPlaceholder;
            emailError.textContent = t.emailError;
            
            document.querySelector('label[for="password"]').textContent = t.passwordLabel;
            passwordInput.placeholder = t.passwordPlaceholder;
            passwordError.textContent = t.passwordError;
            
            // Update form options
            document.querySelector('.remember-me label').textContent = t.rememberMe;
            document.querySelector('.forgot-password').textContent = t.forgotPassword;
            
            // Update login button
            loginBtn.textContent = t.loginButton;
        }

        // Language dropdown toggle
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!languageDropdown.contains(e.target) && e.target !== languageBtn) {
                languageDropdown.classList.remove('show');
            }
        });

        // Language selection
        languageOptions.forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                const flag = this.getAttribute('data-flag');
                const langName = this.textContent.trim();

                // Update active state
                languageOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');

                // Update button
                currentFlag.textContent = flag;
                currentLang.textContent = langName.split('(')[0].trim();

                // Close dropdown
                languageDropdown.classList.remove('show');

                // Update page language
                updatePageLanguage(lang);
                
                console.log('Language changed to:', langName);
            });
        });

        function validateForm() {
            const emailValid = emailInput.value.trim() !== '';
            const passwordValid = passwordInput.value.trim() !== '';

            if (emailValid && passwordValid) {
                loginBtn.classList.add('active');
                loginBtn.style.cursor = 'pointer';
            } else {
                loginBtn.classList.remove('active');
                loginBtn.style.cursor = 'not-allowed';
            }
        }

        emailInput.addEventListener('input', validateForm);
        passwordInput.addEventListener('input', validateForm);

        togglePassword.addEventListener('click', function() {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            this.textContent = type === 'password' ? '👁️' : '🙈';
        });

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;

            emailError.classList.remove('show');
            passwordError.classList.remove('show');
            emailInput.classList.remove('error');
            passwordInput.classList.remove('error');

            if (emailInput.value.trim() === '') {
                emailError.classList.add('show');
                emailInput.classList.add('error');
                isValid = false;
            }

            if (passwordInput.value.trim() === '') {
                passwordError.classList.add('show');
                passwordInput.classList.add('error');
                isValid = false;
            }

            if (isValid && loginBtn.classList.contains('active')) {
                const currentLangCode = document.querySelector('.language-option.active').getAttribute('data-lang');
                const t = translations[currentLangCode];
                alert(t.successMessage);
            }
        });
    </script>
</body>
</html>
