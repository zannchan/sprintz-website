import { useMemo, useState } from 'react';

const translations = {
  en: {
    languageLabel: 'Language',
    nav: ['About', 'Sectors', 'Markets', 'Contact'],
    heroTag: 'Singapore-Based International Trading Corporation',
    heroTitle: 'Global Trade. Structured Supply. Professional Execution.',
    heroText:
      'Sprintz Holdings Pte. Ltd. supports international business with a stronger corporate approach to sourcing, supply coordination, and cross-border commercial execution.',
    primaryCta: 'Request a Quote',
    secondaryCta: 'Explore Capabilities',
    stats: [
      ['Positioning', 'International Trading'],
      ['Focus', 'Structured Supply'],
      ['Approach', 'Commercial Reliability'],
    ],
    whyTitle: 'Why global partners engage Sprintz',
    whyItems: [
      'Singapore-based international trade platform',
      'Cross-border sourcing and supplier coordination',
      'Professional commercial documentation support',
      'Responsive handling for regional buyers and partners',
      'Corporate presentation suitable for serious counterparties',
      'Clear enquiry and quote workflow',
    ],
    aboutTag: 'About Sprintz',
    aboutTitle: 'A more credible corporate profile for serious cross-border business.',
    aboutBody1:
      'This website positions Sprintz as a polished Singapore-headquartered trading company rather than a narrow product brochure. The emphasis is on trust, corporate clarity, and international readiness.',
    aboutBody2:
      'The messaging focuses on structured trade support, procurement capability, responsive execution, and regional market connectivity—supported by a clean visual identity and stronger content hierarchy.',
    sectorsTag: 'Core sectors',
    sectorsTitle: 'Capabilities presented with an international corporate tone.',
    sectors: [
      {
        title: 'Industrial Equipment & Automation',
        text: 'Supply coordination for factory systems, automation components, technical procurement, and project-linked industrial requirements.',
      },
      {
        title: 'Energy & Fuel Trading',
        text: 'Commercial support for structured energy-related transactions, supply discussions, and regional trade execution across compliant frameworks.',
      },
      {
        title: 'Agri & Commodity Supply',
        text: 'International trade support across agricultural commodities, bulk products, and contract-based cross-border supply arrangements.',
      },
      {
        title: 'Strategic Procurement & Trade Facilitation',
        text: 'Business matching, documentation support, supplier coordination, and commercial execution oversight for regional opportunities.',
      },
    ],
    marketsTag: 'Market reach',
    marketsTitle: 'Built for regional and international counterparties.',
    markets: ['Singapore', 'China', 'Middle East', 'Southeast Asia', 'South Asia'],
    diffTag: 'Corporate differentiation',
    diffTitle: 'What the new site should communicate immediately.',
    diffItems: [
      'Professional and credible',
      'Internationally oriented',
      'Commercially structured',
      'Easy to contact and engage',
      'Broad but disciplined in scope',
      'Suitable for buyers, suppliers, and partners',
    ],
    contactTag: 'Contact',
    contactTitle: 'Start a business enquiry.',
    contactText:
      'Use one clean corporate enquiry form instead of cluttered contact blocks. Keep the website focused on trust, seriousness, and ease of engagement.',
    officeTitle: 'Registered Office',
    officeText: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    form: {
      name: 'Full Name',
      company: 'Company',
      email: 'Business Email',
      subject: 'Subject',
      message: 'Tell us about your requirement',
      submit: 'Submit Enquiry',
      whatsapp: 'WhatsApp Us',
    },
    footer: 'Sprintz Holdings Pte. Ltd. — International trade, procurement, and supply coordination.',
  },
  zh: {
    languageLabel: '语言',
    nav: ['关于我们', '业务领域', '市场', '联系'],
    heroTag: '新加坡国际贸易企业',
    heroTitle: '全球贸易 · 体系化供应 · 专业执行',
    heroText:
      'Sprintz Holdings Pte. Ltd. 以更专业的企业形象支持国际采购、供应协调及跨境商业执行。',
    primaryCta: '索取报价',
    secondaryCta: '查看能力',
    stats: [
      ['定位', '国际贸易'],
      ['重点', '体系化供应'],
      ['方式', '商业可靠性'],
    ],
    whyTitle: '全球合作伙伴选择 Sprintz 的原因',
    whyItems: [
      '立足新加坡的国际贸易平台',
      '跨境采购与供应商协调',
      '专业商业文件支持',
      '高效对接区域买家与合作伙伴',
      '更符合国际企业客户预期的形象',
      '清晰的询价与报价流程',
    ],
    aboutTag: '关于 Sprintz',
    aboutTitle: '为严肃的跨境业务建立更具公信力的企业形象。',
    aboutBody1:
      '本网站将 Sprintz 定位为一家成熟、专业、总部设于新加坡的贸易公司，而不是单一产品展示页面。重点在于信任、清晰度与国际化。',
    aboutBody2:
      '整体信息围绕贸易支持、采购能力、执行效率与区域市场连接展开，并以更干净的视觉与层级结构呈现。',
    sectorsTag: '核心业务',
    sectorsTitle: '以国际企业语调呈现业务能力。',
    sectors: [
      {
        title: '工业设备与自动化',
        text: '支持工厂系统、自动化部件、技术采购与项目型工业需求的供应协调。',
      },
      {
        title: '能源与燃料贸易',
        text: '为能源相关交易、供应洽谈及区域贸易执行提供商业支持。',
      },
      {
        title: '农产品与大宗商品供应',
        text: '支持农产品、大宗商品及合同型跨境供应安排。',
      },
      {
        title: '战略采购与贸易促进',
        text: '提供商业对接、文件支持、供应商协调及区域机会执行管理。',
      },
    ],
    marketsTag: '市场覆盖',
    marketsTitle: '服务区域及国际合作方。',
    markets: ['新加坡', '中国', '中东', '东南亚', '南亚'],
    diffTag: '企业差异化',
    diffTitle: '新版网站应立即传达的信息。',
    diffItems: ['专业可信', '国际导向', '商业结构清晰', '便于联系', '范围广而不杂', '适合买家、供应商及合作伙伴'],
    contactTag: '联系',
    contactTitle: '开始业务咨询。',
    contactText: '使用简洁企业询盘表单，避免网站出现杂乱的联系方式，提升信任感与专业感。',
    officeTitle: '注册地址',
    officeText: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    form: {
      name: '姓名',
      company: '公司',
      email: '商务邮箱',
      subject: '主题',
      message: '请说明您的需求',
      submit: '提交询盘',
      whatsapp: 'WhatsApp 联系',
    },
    footer: 'Sprintz Holdings Pte. Ltd. — 国际贸易、采购与供应协调。',
  },
  ar: {
    languageLabel: 'اللغة',
    nav: ['من نحن', 'القطاعات', 'الأسواق', 'اتصل بنا'],
    heroTag: 'شركة تجارة دولية مقرها سنغافورة',
    heroTitle: 'تجارة عالمية. توريد منظم. تنفيذ مهني.',
    heroText:
      'تدعم Sprintz Holdings Pte. Ltd. الأعمال الدولية من خلال نهج مؤسسي أقوى في التوريد وتنسيق الإمداد والتنفيذ التجاري عبر الحدود.',
    primaryCta: 'طلب عرض سعر',
    secondaryCta: 'استكشاف القدرات',
    stats: [
      ['التموضع', 'تجارة دولية'],
      ['التركيز', 'توريد منظم'],
      ['النهج', 'موثوقية تجارية'],
    ],
    whyTitle: 'لماذا يتعامل الشركاء العالميون مع Sprintz',
    whyItems: [
      'منصة تجارة دولية مقرها سنغافورة',
      'تنسيق التوريد والموردين عبر الحدود',
      'دعم مهني للوثائق التجارية',
      'استجابة فعالة للمشترين والشركاء الإقليميين',
      'صورة مؤسسية مناسبة للأطراف الجادة',
      'مسار واضح للاستفسارات وعروض الأسعار',
    ],
    aboutTag: 'عن Sprintz',
    aboutTitle: 'صورة مؤسسية أكثر مصداقية للأعمال العابرة للحدود.',
    aboutBody1:
      'يقدم هذا الموقع Sprintz كشركة تجارة مصقولة مقرها سنغافورة بدلاً من موقع محدود لعرض المنتجات فقط. التركيز هنا على الثقة والوضوح والجاهزية الدولية.',
    aboutBody2:
      'تركز الرسائل على دعم التجارة والقدرة الشرائية وسرعة التنفيذ والربط بالأسواق الإقليمية مع هوية بصرية أنظف وتسلسل محتوى أقوى.',
    sectorsTag: 'القطاعات الأساسية',
    sectorsTitle: 'قدرات معروضة بصياغة مؤسسية دولية.',
    sectors: [
      {
        title: 'المعدات الصناعية والأتمتة',
        text: 'تنسيق التوريد للأنظمة الصناعية ومكونات الأتمتة والمشتريات الفنية ومتطلبات المشاريع الصناعية.',
      },
      {
        title: 'تجارة الطاقة والوقود',
        text: 'دعم تجاري للمعاملات المتعلقة بالطاقة ومناقشات الإمداد والتنفيذ التجاري الإقليمي ضمن أطر متوافقة.',
      },
      {
        title: 'توريد السلع الزراعية والمواد الأساسية',
        text: 'دعم التجارة الدولية للسلع الزراعية والمنتجات السائبة وترتيبات التوريد التعاقدية عبر الحدود.',
      },
      {
        title: 'التوريد الاستراتيجي وتيسير التجارة',
        text: 'مواءمة الأعمال ودعم الوثائق وتنسيق الموردين والإشراف على التنفيذ التجاري للفرص الإقليمية.',
      },
    ],
    marketsTag: 'نطاق الأسواق',
    marketsTitle: 'مصمم للتعامل مع الأطراف الإقليمية والدولية.',
    markets: ['سنغافورة', 'الصين', 'الشرق الأوسط', 'جنوب شرق آسيا', 'جنوب آسيا'],
    diffTag: 'التميّز المؤسسي',
    diffTitle: 'ما الذي يجب أن ينقله الموقع الجديد فوراً.',
    diffItems: ['مهني وموثوق', 'ذو توجه دولي', 'منظم تجارياً', 'سهل التواصل', 'واسع النطاق لكن منضبط', 'مناسب للمشترين والموردين والشركاء'],
    contactTag: 'اتصل بنا',
    contactTitle: 'ابدأ استفسارك التجاري.',
    contactText: 'استخدم نموذج استفسار مؤسسي واحد وواضح بدلاً من عرض وسائل اتصال كثيرة ومشتتة.',
    officeTitle: 'العنوان المسجل',
    officeText: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    form: {
      name: 'الاسم الكامل',
      company: 'الشركة',
      email: 'البريد الإلكتروني التجاري',
      subject: 'الموضوع',
      message: 'أخبرنا بمتطلباتك',
      submit: 'إرسال الاستفسار',
      whatsapp: 'التواصل عبر واتساب',
    },
    footer: 'Sprintz Holdings Pte. Ltd. — تجارة دولية ومشتريات وتنسيق إمداد.',
  },
  id: {
    languageLabel: 'Bahasa',
    nav: ['Tentang', 'Sektor', 'Pasar', 'Kontak'],
    heroTag: 'Korporasi Perdagangan Internasional Berbasis di Singapura',
    heroTitle: 'Perdagangan Global. Pasokan Terstruktur. Eksekusi Profesional.',
    heroText:
      'Sprintz Holdings Pte. Ltd. mendukung bisnis internasional dengan pendekatan korporat yang lebih kuat dalam sourcing, koordinasi pasokan, dan eksekusi komersial lintas negara.',
    primaryCta: 'Minta Penawaran',
    secondaryCta: 'Lihat Kapabilitas',
    stats: [
      ['Posisi', 'Perdagangan Internasional'],
      ['Fokus', 'Pasokan Terstruktur'],
      ['Pendekatan', 'Keandalan Komersial'],
    ],
    whyTitle: 'Mengapa mitra global bekerja dengan Sprintz',
    whyItems: [
      'Platform perdagangan internasional berbasis Singapura',
      'Koordinasi sourcing dan pemasok lintas negara',
      'Dukungan dokumentasi komersial profesional',
      'Respons cepat untuk pembeli dan mitra regional',
      'Tampilan korporat yang sesuai untuk counterpart serius',
      'Alur enquiry dan quotation yang jelas',
    ],
    aboutTag: 'Tentang Sprintz',
    aboutTitle: 'Profil korporat yang lebih kredibel untuk bisnis lintas negara yang serius.',
    aboutBody1:
      'Website ini memposisikan Sprintz sebagai perusahaan perdagangan yang matang dan profesional berbasis di Singapura, bukan sekadar brosur produk.',
    aboutBody2:
      'Pesan utamanya berfokus pada dukungan perdagangan, kapabilitas procurement, kecepatan eksekusi, dan konektivitas pasar regional, didukung visual yang lebih bersih.',
    sectorsTag: 'Sektor inti',
    sectorsTitle: 'Kapabilitas yang ditampilkan dengan tone korporat internasional.',
    sectors: [
      {
        title: 'Peralatan Industri & Otomasi',
        text: 'Koordinasi pasokan untuk sistem pabrik, komponen otomasi, procurement teknis, dan kebutuhan proyek industri.',
      },
      {
        title: 'Perdagangan Energi & Bahan Bakar',
        text: 'Dukungan komersial untuk transaksi terkait energi, diskusi pasokan, dan eksekusi perdagangan regional dalam kerangka yang sesuai.',
      },
      {
        title: 'Pasokan Komoditas & Produk Agrikultur',
        text: 'Dukungan perdagangan internasional untuk komoditas pertanian, produk curah, dan pengaturan pasokan lintas negara berbasis kontrak.',
      },
      {
        title: 'Pengadaan Strategis & Fasilitasi Perdagangan',
        text: 'Business matching, dukungan dokumen, koordinasi pemasok, dan pengawasan eksekusi komersial untuk peluang regional.',
      },
    ],
    marketsTag: 'Jangkauan pasar',
    marketsTitle: 'Dibangun untuk counterpart regional dan internasional.',
    markets: ['Singapura', 'China', 'Timur Tengah', 'Asia Tenggara', 'Asia Selatan'],
    diffTag: 'Diferensiasi korporat',
    diffTitle: 'Apa yang harus langsung dikomunikasikan oleh website baru.',
    diffItems: ['Profesional dan kredibel', 'Berorientasi internasional', 'Terstruktur secara komersial', 'Mudah dihubungi', 'Luas namun tetap terarah', 'Cocok untuk buyer, supplier, dan partner'],
    contactTag: 'Kontak',
    contactTitle: 'Mulai enquiry bisnis Anda.',
    contactText: 'Gunakan satu form enquiry korporat yang bersih agar website terasa lebih profesional dan terpercaya.',
    officeTitle: 'Alamat Terdaftar',
    officeText: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    form: {
      name: 'Nama Lengkap',
      company: 'Perusahaan',
      email: 'Email Bisnis',
      subject: 'Subjek',
      message: 'Jelaskan kebutuhan Anda',
      submit: 'Kirim Enquiry',
      whatsapp: 'WhatsApp Kami',
    },
    footer: 'Sprintz Holdings Pte. Ltd. — perdagangan internasional, procurement, dan koordinasi pasokan.',
  },
};

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'zh', label: '中文' },
  { value: 'ar', label: 'العربية' },
  { value: 'id', label: 'Bahasa Indonesia' },
];

function SectionTitle({ tag, title }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{tag}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState('en');
  const t = useMemo(() => translations[language], [language]);
  const isRtl = language === 'ar';

  return (
    <div className={`app-shell ${isRtl ? 'rtl' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="site-header">
        <div className="container nav-row">
          <a href="#top" className="brand-mark" aria-label="Sprintz home">
            <div className="brand-icon">S</div>
            <div>
              <strong>Sprintz Holdings</strong>
              <span>Pte. Ltd.</span>
            </div>
          </a>

          <nav className="site-nav">
            <a href="#about">{t.nav[0]}</a>
            <a href="#sectors">{t.nav[1]}</a>
            <a href="#markets">{t.nav[2]}</a>
            <a href="#contact">{t.nav[3]}</a>
          </nav>

          <div className="language-switcher">
            <label htmlFor="language-select">{t.languageLabel}</label>
            <select
              id="language-select"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div>
              <div className="hero-tag">{t.heroTag}</div>
              <h1>{t.heroTitle}</h1>
              <p className="hero-copy">{t.heroText}</p>
              <div className="hero-actions">
                <a href="#contact" className="button button-primary">
                  {t.primaryCta}
                </a>
                <a href="#sectors" className="button button-secondary">
                  {t.secondaryCta}
                </a>
              </div>
              <div className="stats-grid">
                {t.stats.map(([label, value]) => (
                  <div className="stat-card" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <aside className="highlight-card">
              <p className="eyebrow light">{t.whyTitle}</p>
              <ul>
                {t.whyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section id="about" className="content-section">
          <div className="container two-column">
            <SectionTitle tag={t.aboutTag} title={t.aboutTitle} />
            <div className="body-copy">
              <p>{t.aboutBody1}</p>
              <p>{t.aboutBody2}</p>
            </div>
          </div>
        </section>

        <section id="sectors" className="content-section muted-section">
          <div className="container">
            <SectionTitle tag={t.sectorsTag} title={t.sectorsTitle} />
            <div className="card-grid four-col">
              {t.sectors.map((sector) => (
                <article className="info-card" key={sector.title}>
                  <h3>{sector.title}</h3>
                  <p>{sector.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="markets" className="content-section">
          <div className="container market-band">
            <div>
              <p className="eyebrow">{t.marketsTag}</p>
              <h2>{t.marketsTitle}</h2>
            </div>
            <div className="market-tags">
              {t.markets.map((market) => (
                <span key={market}>{market}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section dark-section">
          <div className="container two-column wide-gap">
            <SectionTitle tag={t.diffTag} title={t.diffTitle} />
            <div className="pill-grid">
              {t.diffItems.map((item) => (
                <div className="pill-card" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="content-section">
          <div className="container contact-grid">
            <div>
              <SectionTitle tag={t.contactTag} title={t.contactTitle} />
              <p className="body-intro">{t.contactText}</p>
              <div className="office-card">
                <span>{t.officeTitle}</span>
                <strong>{t.officeText}</strong>
              </div>
            </div>

            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <div className="form-grid">
                <input type="text" placeholder={t.form.name} />
                <input type="text" placeholder={t.form.company} />
                <input type="email" placeholder={t.form.email} className="full-width" />
                <input type="text" placeholder={t.form.subject} className="full-width" />
                <textarea placeholder={t.form.message} className="full-width" rows="6" />
              </div>
              <div className="form-actions">
                <button type="submit" className="button button-primary">
                  {t.form.submit}
                </button>
                <a href="https://wa.me/6583889168" className="button button-secondary" target="_blank" rel="noreferrer">
                  {t.form.whatsapp}
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <p>{t.footer}</p>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
