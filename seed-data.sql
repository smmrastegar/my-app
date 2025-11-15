-- Add default stores (6 stores)

INSERT INTO stores (name, slug, description, status, category, features_credit_purchase, features_no_interest, features_fast_approval, features_free_delivery, features_warranty, features_support247)
VALUES 
  (
    'دیجی‌کالا',
    'digikala',
    'بزرگترین فروشگاه آنلاین ایران با تنوع محصولات بی‌نظیر در زمینه لوازم الکترونیکی، پوشاک، لوازم خانگی و بسیاری دیگر',
    'active',
    'electronics',
    1, 1, 1, 1, 1, 1
  ),
  (
    'اسنپ‌مارکت',
    'snapmarket',
    'خرید آنلاین مواد غذایی و محصولات سوپرمارکتی با ارسال سریع به درب منزل',
    'active',
    'grocery',
    1, 1, 1, 1, 0, 1
  ),
  (
    'باسلام',
    'basalam',
    'بازارچه آنلاین محصولات دست‌ساز ایرانی، حمایت از هنرمندان و کسب‌وکارهای کوچک',
    'active',
    'other',
    1, 1, 1, 0, 1, 0
  ),
  (
    'زرین‌پوش',
    'zarinpoosh',
    'فروشگاه آنلاین پوشاک و مد با برندهای معتبر داخلی و خارجی',
    'active',
    'clothing',
    1, 1, 1, 1, 1, 0
  ),
  (
    'ایران‌خودرو',
    'irankhodro',
    'فروش اقساطی خودروهای سواری با شرایط پرداخت منعطف',
    'coming_soon',
    'other',
    1, 1, 0, 0, 1, 1
  ),
  (
    'همراه‌اول شاپ',
    'hamrahavalshop',
    'فروشگاه رسمی همراه‌اول، خرید گوشی موبایل، تبلت و لوازم جانبی',
    'coming_soon',
    'electronics',
    1, 1, 1, 0, 1, 1
  );

-- Add default blog posts (4 posts)
-- Note: We need to add them to the posts table with proper content structure

INSERT INTO posts (title, slug, excerpt, status, published_date)
VALUES 
  (
    'امنیت تراکنش‌های مالی در عصر دیجیتال',
    'security-financial-transactions',
    'در این مقاله به اهمیت امنیت سایبری و حفاظت از اطلاعات مالی در دنیای دیجیتال می‌پردازیم و راهکارهای عملی برای افزایش امنیت تراکنش‌های آنلاین ارائه می‌دهیم.',
    'published',
    datetime('now')
  ),
  (
    'نقش صندوق‌های رفاهی در بهبود کیفیت زندگی',
    'welfare-funds-quality-of-life',
    'صندوق‌های رفاهی کارکنان می‌توانند نقش مهمی در بهبود کیفیت زندگی و ایجاد امنیت مالی برای کارگران و کارمندان داشته باشند. در این مقاله به بررسی مزایا و کاربردهای این صندوق‌ها می‌پردازیم.',
    'published',
    datetime('now', '-1 day')
  ),
  (
    'راهکارهای هوشمند مدیریت نقدینگی شخصی',
    'smart-liquidity-management',
    'مدیریت نقدینگی یکی از مهم‌ترین مهارت‌های مالی است. در این مطلب با روش‌های عملی و کاربردی برای مدیریت بهتر درآمد و هزینه‌های ماهانه آشنا می‌شوید.',
    'published',
    datetime('now', '-2 days')
  ),
  (
    'ظهور و رشد لندتک‌ها در دنیا',
    'rise-of-lending-tech',
    'پلتفرم‌های وام‌دهی دیجیتال یا لندتک‌ها در سال‌های اخیر رشد چشمگیری داشته‌اند. در این مقاله به بررسی دلایل ظهور، مزایا و چالش‌های این پلتفرم‌ها می‌پردازیم.',
    'published',
    datetime('now', '-3 days')
  );

-- Add content for each blog post using the posts_content table
-- Post 1: امنیت تراکنش‌های مالی
INSERT INTO posts_content (parent_id, path, text, type, version, order_num)
VALUES 
  (
    (SELECT id FROM posts WHERE slug = 'security-financial-transactions'),
    'content.0',
    'امنیت تراکنش‌های مالی آنلاین یکی از دغدغه‌های اصلی کاربران در عصر دیجیتال است. با افزایش استفاده از خدمات بانکداری الکترونیک و پرداخت‌های آنلاین، حفاظت از اطلاعات مالی اهمیت بیشتری پیدا کرده است.',
    'p',
    1,
    0
  ),
  (
    (SELECT id FROM posts WHERE slug = 'security-financial-transactions'),
    'content.1',
    'راهکارهای امنیتی برای تراکنش‌های آنلاین',
    'h2',
    1,
    1
  ),
  (
    (SELECT id FROM posts WHERE slug = 'security-financial-transactions'),
    'content.2',
    'استفاده از رمزهای عبور قوی و یکتا برای هر سرویس، فعال‌سازی احراز هویت دو مرحله‌ای، و بررسی دقیق آدرس وب‌سایت‌ها قبل از وارد کردن اطلاعات مالی از جمله مهم‌ترین نکات امنیتی هستند.',
    'p',
    1,
    2
  ),
  (
    (SELECT id FROM posts WHERE slug = 'security-financial-transactions'),
    'content.3',
    'نقش پلتفرم‌های فین‌تک در امنیت مالی',
    'h2',
    1,
    3
  ),
  (
    (SELECT id FROM posts WHERE slug = 'security-financial-transactions'),
    'content.4',
    'پلتفرم‌های فین‌تک مدرن مانند نسی‌لند از جدیدترین استانداردهای امنیتی جهانی استفاده می‌کنند. رمزنگاری اطلاعات، ذخیره‌سازی ایمن داده‌ها، و نظارت مستمر بر تراکنش‌ها از جمله اقدامات امنیتی این پلتفرم‌هاست.',
    'p',
    1,
    4
  );

-- Post 2: صندوق‌های رفاهی
INSERT INTO posts_content (parent_id, path, text, type, version, order_num)
VALUES 
  (
    (SELECT id FROM posts WHERE slug = 'welfare-funds-quality-of-life'),
    'content.0',
    'صندوق‌های رفاهی کارکنان ابزاری مؤثر برای ایجاد امنیت مالی و بهبود کیفیت زندگی کارگران و کارمندان هستند. این صندوق‌ها با جمع‌آوری سهم ماهانه اعضا، امکان دریافت وام با شرایط مناسب را فراهم می‌کنند.',
    'p',
    1,
    0
  ),
  (
    (SELECT id FROM posts WHERE slug = 'welfare-funds-quality-of-life'),
    'content.1',
    'مزایای عضویت در صندوق رفاهی',
    'h2',
    1,
    1
  ),
  (
    (SELECT id FROM posts WHERE slug = 'welfare-funds-quality-of-life'),
    'content.2',
    'دریافت وام با بهره کمتر نسبت به بانک‌ها، برنامه‌ریزی مالی بلندمدت، و دسترسی سریع به منابع مالی در مواقع اضطراری از جمله مزایای اصلی عضویت در صندوق‌های رفاهی است.',
    'p',
    1,
    2
  ),
  (
    (SELECT id FROM posts WHERE slug = 'welfare-funds-quality-of-life'),
    'content.3',
    'چگونه صندوق رفاهی انتخاب کنیم؟',
    'h2',
    1,
    3
  ),
  (
    (SELECT id FROM posts WHERE slug = 'welfare-funds-quality-of-life'),
    'content.4',
    'هنگام انتخاب صندوق رفاهی، به سابقه و اعتبار صندوق، میزان سهم ماهانه، نرخ بهره وام‌ها، و شرایط پرداخت اقساط توجه کنید. همچنین بررسی نظرات سایر اعضا می‌تواند در تصمیم‌گیری بهتر کمک کند.',
    'p',
    1,
    4
  );

-- Post 3: مدیریت نقدینگی
INSERT INTO posts_content (parent_id, path, text, type, version, order_num)
VALUES 
  (
    (SELECT id FROM posts WHERE slug = 'smart-liquidity-management'),
    'content.0',
    'مدیریت صحیح نقدینگی شخصی می‌تواند تفاوت زیادی در کیفیت زندگی مالی افراد ایجاد کند. با برنامه‌ریزی دقیق و استفاده از ابزارهای مناسب، می‌توانید کنترل بهتری بر درآمد و هزینه‌های خود داشته باشید.',
    'p',
    1,
    0
  ),
  (
    (SELECT id FROM posts WHERE slug = 'smart-liquidity-management'),
    'content.1',
    'اصول پایه مدیریت نقدینگی',
    'h2',
    1,
    1
  ),
  (
    (SELECT id FROM posts WHERE slug = 'smart-liquidity-management'),
    'content.2',
    'ثبت دقیق درآمدها و هزینه‌ها، تفکیک هزینه‌های ضروری از غیرضروری، ایجاد یک صندوق اضطراری، و سرمایه‌گذاری بخشی از درآمد از جمله اصول پایه مدیریت نقدینگی است.',
    'p',
    1,
    2
  ),
  (
    (SELECT id FROM posts WHERE slug = 'smart-liquidity-management'),
    'content.3',
    'ابزارهای دیجیتال برای مدیریت مالی',
    'h2',
    1,
    3
  ),
  (
    (SELECT id FROM posts WHERE slug = 'smart-liquidity-management'),
    'content.4',
    'استفاده از اپلیکیشن‌های مدیریت مالی می‌تواند فرآیند کنترل هزینه‌ها را بسیار ساده‌تر کند. این ابزارها امکان دسته‌بندی خودکار هزینه‌ها، تنظیم هشدارها برای مخارج بیش از حد، و ارائه گزارش‌های تحلیلی را فراهم می‌کنند.',
    'p',
    1,
    4
  );

-- Post 4: لندتک‌ها
INSERT INTO posts_content (parent_id, path, text, type, version, order_num)
VALUES 
  (
    (SELECT id FROM posts WHERE slug = 'rise-of-lending-tech'),
    'content.0',
    'پلتفرم‌های وام‌دهی دیجیتال یا لندتک‌ها در سال‌های اخیر با ارائه خدمات نوآورانه و راحت‌تر نسبت به بانک‌های سنتی، توجه زیادی را به خود جلب کرده‌اند. این پلتفرم‌ها با استفاده از تکنولوژی و هوش مصنوعی، فرآیند دریافت وام را سریع و ساده کرده‌اند.',
    'p',
    1,
    0
  ),
  (
    (SELECT id FROM posts WHERE slug = 'rise-of-lending-tech'),
    'content.1',
    'دلایل رشد لندتک‌ها',
    'h2',
    1,
    1
  ),
  (
    (SELECT id FROM posts WHERE slug = 'rise-of-lending-tech'),
    'content.2',
    'سرعت بالا در پردازش درخواست‌ها، کاهش کاغذبازی، شفافیت بیشتر در شرایط وام، و دسترسی آسان‌تر برای افراد بدون سابقه اعتباری قوی از جمله دلایل محبوبیت لندتک‌ها هستند.',
    'p',
    1,
    2
  ),
  (
    (SELECT id FROM posts WHERE slug = 'rise-of-lending-tech'),
    'content.3',
    'نسی‌لند و خرید اعتباری در ایران',
    'h2',
    1,
    3
  ),
  (
    (SELECT id FROM posts WHERE slug = 'rise-of-lending-tech'),
    'content.4',
    'نسی‌لند به عنوان یک پلتفرم خرید اعتباری ایرانی، امکان خرید از فروشگاه‌های معتبر را بدون نیاز به ضامن و با فرآیند اعتبارسنجی هوشمند فراهم می‌کند. این پلتفرم با ارائه شرایط منعطف پرداخت، تجربه خریدی راحت‌تر و امن‌تر را برای کاربران به ارمغان می‌آورد.',
    'p',
    1,
    4
  );

