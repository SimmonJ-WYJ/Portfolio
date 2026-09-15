// Metrology platform case study — /metrology
//
// Chinese is the source language for this page: the zh strings are the
// author's deck copy (client anonymised to "某头部酒企"). The English is a
// translation of it. The five capability keywords, product-UI labels inside
// screenshots and the colour / type spec values stay identical in both.
export default {
  en: {
    back: 'Back',

    heroKicker: 'Production Safety Metrology Platform',
    heroTitle: 'METROLOGY SECURITY SYSTEM DESIGN',
    heroSub: 'Design notes from a standard production-process project',

    metaRoleLabel: 'Role',
    metaRoleValue: 'Product Designer',
    metaClientLabel: 'Client',
    metaClientValue: 'A leading liquor group',
    metaPlatformLabel: 'Platform',
    metaPlatformValue: 'Web back office',

    title: 'Production Safety Metrology Platform',
    intro: [
      'In traditional manufacturing, headcount is large, production runs through many steps, and key readings — logistics, temperature, humidity — cannot be checked in real time. That matters most in a safety-critical liquor business: this group produces 99% of its category’s annual output, so a metrology system that monitors logistics, production and storage data live is essential to both safety and process quality across a workforce of tens of thousands.',
      'This case walks the whole process: field research, a user experience map, needs analysis, design goals, the interface, and the design system that shipped with it.',
    ],
    resultsTitle: 'Outcomes',
    results: [
      '**Development efficiency up 76%** — a full colour, type and 24-column grid spec made hand-off and screen adaptation faster.',
      '**Empty-truck rate down 12%** — logistics moved to load-rate cards, so under-filled vehicles are visible at a glance.',
      '**Operating incidents down 32%** — press-and-hold confirmation and guided hints cut mis-taps on irreversible actions like dispatch.',
    ],

    bgTitle: 'Background',
    bgPies: [
      { pct: 98.5, legend: 'The group · others', caption: 'Share of the category’s annual output' },
      { pct: 90.5, legend: 'The group · others', caption: 'Share of the category’s stored liquor' },
    ],
    bgCopyTitle: 'The group’s share of its category',
    bgCopy: 'By output and by stock, the group holds most of its category. In a production system of tens of thousands of people, metrology data is the baseline for safety and craft.',

    approvalTitle: 'Project approval',
    approvalIntro: 'To really understand the client we did a lot of field research up front: mapping the metrology department, inspecting the machinery and on-site logistics along the production line, and visiting every sub-plant one by one. Cars are not allowed inside, so the team rode e-bikes across nearly 4,500 m² of plant in the summer heat.',
    approvalPhotos: [
      'Checking the accuracy of the flow scale in the crushing workshop',
      'Coordinating a forklift driver to bring the reference vat indoors',
      'The hoist has to be moved onto the right electronic scale and indexed before the water test',
      'Finally, simulating a standard measurement as the vat-calibration staff would',
    ],
    approvalCopyTitle: 'Vat calibration: one complete standard measurement',
    approvalCopy: 'Following flow-scale checks, vat transport, hoist indexing and the water test end to end is what made “metrology” concrete on the ground.',
    approvalIntro2: 'To understand the measurement standard behind each feature, we also went to different plant areas and stepped into the roles there — to learn the business and the people first-hand.',
    scalePhotos: [
      'Logistics vehicles need gross and tare weight checked; the truck scale is the only way to measure them',
      'Using reference weights to confirm the truck scale reads true',
      'Measuring real trucks for tare and gross. After rain the readings drifted — the site was caked in distillers’ grain and mud, so the team cleaned it ourselves before moving the weights and re-measuring. A real taste of traditional manufacturing.',
    ],
    cellarCopyTitle: 'Cellar fermentation: temperature is the key variable',
    cellarCopy: 'This category ferments as a solid mash in sunken clay vats, kept warm and sealed under a large quilt. The vats are about a person deep, so one probe at the centre is not enough and ground temperature matters too — we settled on averaging two points (put simply: one thermometer high in the mash and one low).',

    journeyTitle: 'User experience map',
    journeyRows: { phase: 'Phase', behavior: 'Behaviour', problem: 'Problems', solution: 'Solutions' },
    journeyPhases: ['Search data', 'Live monitoring', 'On-site control'],
    journeyBehaviors: [
      ['Confirm the data needed', 'Skim the data', 'Find the key figures'],
      ['Analyse the data', 'Judge anomalies', 'Locate abnormal data'],
      ['Analyse the anomaly', 'Trace the cause', 'Coordinate resources'],
      ['Schedule an inspection', 'Check the result', 'Keep following up'],
    ],
    journeyProblems: [
      { title: 'Vehicle weight & logistics', items: ['Large daily volume; every entry and exit is logged, hard to search quickly', 'Logistics and delay information cannot be tracked live', 'Vehicle status is unknown while loading; recording is tedious'] },
      { title: 'Temperature & humidity', items: ['No live readings — only checkable on site', 'Piles of records; finding the key number is slow'] },
      { title: 'Vat calibration', items: ['Calibration is slow and laborious; progress is hard to track', 'Vat issues are tagged by hand and easily forgotten'] },
    ],
    journeySolutions: ['Consolidate features into a home dashboard', 'Lower the learning curve with better interactions', 'Reduce visual noise to speed up reading', 'Add multi-dimensional data analysis', 'Pick the right chart for each kind of information'],
    journeyCopyTitle: 'From behaviour to problems to solutions',
    journeyCopy: 'Chaining the behaviours across searching, monitoring and on-site control, the problems cluster into vehicle logistics, temperature and humidity, and vat calibration. The answers land in dashboard consolidation, interaction patterns, visual noise reduction, multi-dimensional analysis and chart choice.',

    needsTitle: 'Needs analysis',
    venn: ['Temperature & humidity', 'Vat weight', 'Weight & logistics'],
    needsHeadline: 'Needs surfaced by **stepping into each role** during project approval',
    needsPoints: [
      { title: 'Production process', text: 'To protect liquor quality, people record how different readings change by hand; the live temperature cannot be confirmed when it is needed, and when quality misses the standard there is no quick way to trace which production step went wrong.' },
      { title: 'Logistics process', text: 'Inbound trucks are re-sequenced by hand, so the path is long and mistakes slip in during shift changes; filling the gaps means digging through a month of records. Outbound loads are counted manually and timings are never surfaced — so this data needs to be consolidated.' },
    ],

    goalsTitle: 'Design goals',
    goals: [
      { title: 'Tiered content for faster reading', text: 'Surface the common, useful data more directly from a large volume of information.' },
      { title: 'High-value data', text: 'A clearer, lower-distraction visual style that delivers the high-value data people need.' },
      { title: 'Operating efficiency', text: 'Consolidate each page’s core data and make key information and actions stand out.' },
      { title: 'Multi-role async collaboration', text: 'Consistent component parameters so pages adapt quickly to different displays and the team works faster together.' },
    ],

    contentTitle: 'Tiered content for faster reading',
    layersPoint: { title: 'Page framework and layout rules', text: 'To lay pages out effectively, content is split into four tiers: background, navigation, information, and local dialogs.' },
    layers: ['Local dialog layer', 'Information layer', 'Navigation layer', 'Background layer'],
    dashboardPoint: 'Dashboard: four principles',
    dashboardPoints: [
      { title: 'Titles that mean something', text: 'A clear title conveys what the data says at once; write the title from the content, and it reads at a glance.' },
      { title: 'Fitting icons', text: 'Icons are indispensable in UI: turning a concept into a legible shape lowers comprehension cost and lifts the interface.' },
      { title: 'Miller’s law', text: 'Too little content means poor distribution; too much creates visual noise. Fix the number of items and move the rest behind “more”.' },
      { title: 'Sensible layout and planning', text: 'Balanced blocks of equal height keep the eye path calm and follow how people naturally scan.' },
    ],
    tablePoint: 'Tables: alignment, spacing, row height and cells',
    tablePoints: [
      { title: 'Alignment', text: 'Headers and content are left-aligned for visual consistency.' },
      { title: 'Column spacing', text: 'As the viewport changes, tables must fit different resolutions: fix the outer margins and let column gaps change evenly.' },
      { title: 'Row design', text: 'Set a suitable row height to improve reading.' },
      { title: 'Cell height', text: 'By the box model, cell height = content height + vertical padding; line height = 1.5 × font size.' },
    ],

    dataTitle: 'High-value data',
    chartsPoint: { title: 'Data as charts', text: 'The right chart makes complex data measurable and intuitive. After personas and role immersion clarified the metrics people need, we designed charts that show today’s progress and daily workload directly, and rated them good / fair / poor so quality and efficiency read at once.' },
    chartsCopyTitle: 'Today’s completion at a glance',
    chartsCopy: 'Red, orange and green map to poor, fair and good; one card carries weighed trucks, cellar measurements and new-vat tagging together.',
    tableFramePoint: { title: 'A better table framework', text: 'Per Miller’s law, keep list information within the limit; reduce reading friction by choosing the columns people actually care about.' },
    colBlocks: ['Basic info', 'Data', 'Status'],
    hoverPoint: { title: 'Hover', text: 'On hover the cell background fills, helping people align a row and reducing misreads.' },

    efficiencyTitle: 'Operating efficiency',
    efficiencyPoint: { title: 'Consolidate key data to read faster', text: 'Distil the core data and make it measurable and intuitive. Logistics uses a card layout instead of a plain list, with load state in three tiers — the emptier the truck, the stronger the warning to keep loading until the utilisation target is met — and a touch of emotional design that makes “not full yet” playful and lowers the learning cost.' },
    trucksCopyTitle: 'Logistics cards',
    trucksCopy: 'Load rate, effective payload, waybill and plate number sit on one card; red / orange / green mark the three load states.',
    effItems: [
      { title: 'Logistics', text: 'Logistics is the platform’s highest-frequency area — warehouse staff run the whole flow here. After watching how trucks are actually loaded, the interface splits the rack into upper, middle and lower tiers so remaining space is obvious.' },
      { title: 'Drag and drop', text: 'Dragging selected rows shows a skeuomorphic parcel with count and total weight — sensory feedback that lets people act on instinct.' },
      { title: 'Press and hold', text: 'A load can be approved for dispatch immediately, so a mistake is a real cost. A confirmation dialog interrupts and reading it slows people down — instead, loading completes only after holding the left mouse button for three seconds.' },
      { title: 'Guided hints', text: 'Press-and-hold is not a common interaction, so a hint appears on a single click and disappears on any key — guidance without breaking the flow.' },
    ],

    synergyTitle: 'Multi-role async collaboration',
    gridPoint: { title: 'A 24-column grid', text: 'A grid alternates columns and gutters (column = track + gutter); gutters tune the spacing between tracks and control whitespace. We use 24 columns on a 4 px atomic unit (1440 = 80 + 12×2 + 23×8 + 48×24).' },
    gridLabels: { gutter: 'Gutter 8px', column: 'Column 48px', margin: 'Margin 12px', width: '1336px' },
    colorPoint: { title: 'Color', text: 'A complete colour spec as a component library — smoother hand-off, less time spent in CSS, lower cost and higher output.' },
    swatches: [
      { name: 'Brand Color', value: '#346BFE' },
      { name: 'Danger Color', value: '#FC6883 → #FB3541' },
      { name: 'Warning Color', value: '#FBB924 → #FF8F28' },
      { name: 'Success Color', value: '#32D7B9 → #0DAAA1' },
    ],
    colorHeaders: ['Name', 'Value', 'Usage', 'Sample'],
    grayTitle: 'Gray Color',
    grayRows: [
      ['Gray 1', '#FFFFFF', 'White'], ['Gray 2', '#FAFAFC', 'Page background'], ['Gray 3', '#F4F6FB', 'Area background'],
      ['Gray 4', '#E7E8E9', 'Dividers / borders / disabled background'], ['Gray 5', '#CBCCD0', 'Disabled / hint text'],
      ['Gray 6', '#8C919B', 'Secondary / caption text'], ['Gray 7', '#515462', 'Primary / body text'], ['Gray 8', '#000000', 'Black'],
    ],
    blueTitle: 'Brand Color',
    blueRows: [
      ['Blue 1', '#EFF3FA', 'Selected background'], ['Blue 3', '#6E95FD', 'Glow / global hint border'], ['Blue 5', '#4779FE', 'Hover'],
      ['Blue 6', '#346BFE', 'Default / link text'], ['Blue 7', '#2A56CB', 'Pressed'], ['Blue 9', '#152B66', '—'],
    ],
    fontPoint: { title: 'Font', text: 'A complete type spec as a component library — smoother hand-off and less time spent in CSS.' },
    fontFamilyTitle: 'Font Family',
    fontFamilyNote: 'Type is one of the most basic building blocks of UI. This spec covers family and usage rules (size, line height, weight, colour).',
    fontFamilies: [
      { glyph: '矽', label: 'Chinese', family: 'PingFang SC' },
      { glyph: 'Aa', label: 'Latin', family: 'SF Pro Display' },
      { glyph: '123', label: 'Numerals', family: 'SF Pro Display' },
    ],
    fontSizesTitle: 'Font Sizes',
    fontHeaders: ['Example', 'Size / line height', 'Usage'],
    fontSizes: [
      { size: 24, lh: 32, usage: 'Big Title' }, { size: 20, lh: 28, usage: 'Title' }, { size: 18, lh: 24, usage: 'Main Head' },
      { size: 14, lh: 20, usage: 'Text' }, { size: 12, lh: 16, usage: 'Little Text' },
    ],

    verifyTitle: 'Results',
    verifyPoint: { title: 'A clear lift in monitoring efficiency', text: 'Working the real scenarios on the new platform against the old one, the team gathered feedback and data that verified the design.' },
    bars: [
      { label: 'Development efficiency', pct: 76, up: true },
      { label: 'Empty-truck rate', pct: 12, up: false },
      { label: 'Operating incidents', pct: 32, up: false },
    ],

    alts: {
      hero: 'Metrology platform — 3D illustration of the dashboard, a truck scale and reference weights',
      dashboard: 'Dashboard: overview, late arrivals, daily plan, available trucks, abnormal temperatures',
      parcel: 'Parcel list with cell annotations',
      parcelHover: 'Parcel list with grouped columns and a hovered row',
      trucks: 'Logistics cards showing truck load rates',
      load: 'Cargo space and available parcels',
      drag: 'Dragging parcels onto the rack',
      longpress: 'Hold for three seconds to complete loading',
      guide: 'Guided hint for press-and-hold',
      gauge: 'Daily plan gauge card',
      west: 'Workshop temperature card',
      photo: 'Field research photo',
    },
  },

  zh: {
    back: '返回',

    heroKicker: '安全生产计量管理平台',
    heroTitle: 'METROLOGY SECURITY SYSTEM DESIGN',
    heroSub: '标准生产流程项目设计整理',

    metaRoleLabel: '角色',
    metaRoleValue: '产品设计师',
    metaClientLabel: '客户',
    metaClientValue: '某头部酒企',
    metaPlatformLabel: '平台',
    metaPlatformValue: 'Web 管理后台',

    title: '安全生产计量管理平台',
    intro: [
      '在传统生产制造企业中，人员众多、生产工序繁琐，物流、温度、湿度等关键信息无法实时查看。对于安全性要求较高的酒类企业尤其如此——某头部酒企占有其所在香型白酒每年生产量的 99%，一套能够实时监管物流、生产、保存等关键数据的计量管理系统，对数万人规模的大型酒企的安全性和工艺性来说必不可少。',
      '本案例整理了从实地调研、用户体验地图、需求分析，到设计目标、界面方案与设计规范落地的完整过程。',
    ],
    resultsTitle: '成果',
    results: [
      '**开发效率提升 76%**——完整的色彩、字体与 24 栅格规范，让研发对接与页面适配更快。',
      '**空车率下降 12%**——物流信息改为卡片式装载率视图，未装满车辆一眼可见。',
      '**操作事故率下降 32%**——长按确认与引导提示，降低了装车等不可逆操作的误触。',
    ],

    bgTitle: '项目背景',
    bgPies: [
      { pct: 98.5, legend: '该酒企 · 其他', caption: '该香型白酒每年生产量' },
      { pct: 90.5, legend: '该酒企 · 其他', caption: '该香型白酒存酒量' },
    ],
    bgCopyTitle: '该酒企在所在香型白酒中的份额',
    bgCopy: '无论是年产量还是存酒量，该酒企都占据了所在香型白酒的绝大部分。数万人规模的生产体系里，计量数据就是安全与工艺的底线。',

    approvalTitle: '立项阶段',
    approvalIntro: '为了真正理解需求方，我们前期做了大量实地调研：全面了解计量部门体系，实地考察生产流程中的机械设备和场内物流系统，并一一走访各个分厂。场内无法开车，项目成员顶着夏日高温骑电瓶车，在近 4500 平方米的厂区四处奔波。',
    approvalPhotos: [
      '在粉碎车间检查流量秤的准确度',
      '协调叉车师傅运输标准缸至室内',
      '吊杠移入合适的电子秤计入指数后，才能进行灌水测量',
      '最后模拟标缸人员进行标准测量',
    ],
    approvalCopyTitle: '标缸：一次完整的标准测量',
    approvalCopy: '从流量秤校验、标准缸运输、吊杠计入指数到灌水测量，跟完整个流程，才知道“计量”在现场意味着什么。',
    approvalIntro2: '想要理解平台各个功能的计量标准，还需要去不同厂区以“代入岗位”的形式，充分了解业务和人物画像。',
    scalePhotos: [
      '物流车辆需要检查车辆总重、皮重，汽车衡是唯一测量方法',
      '使用标准砝码，确认汽车衡准确值',
      '卡车实物测量皮重、总重。雨后发现读数不准，现场全是酒糟和泥土混合的污垢，只能和 team 一起清洁后再搬运砝码重测——深深体会到传统制造业的辛苦',
    ],
    cellarCopyTitle: '地缸发酵：温度是关键变量',
    cellarCopy: '该香型白酒采用固态发酵，容器是地缸，靠一床大棉被保温、保气密。酒缸深度约一人高，采集点不能只在中心，地面温度也是关键变量——最终选择上下两点平均值的采集方案（说简单点，就是放入酒糟后在上、下各放一个温度计）。',

    journeyTitle: '用户体验地图',
    journeyRows: { phase: '阶段', behavior: '行为', problem: '问题', solution: '解决' },
    journeyPhases: ['搜索数据', '实时监控', '现场操控'],
    journeyBehaviors: [
      ['确认所需数据', '数据大致浏览', '找到关键数据'],
      ['数据分析', '判断异常', '找到异常数据'],
      ['异常数据分析', '查询原因', '资源协调'],
      ['安排现场排查', '验收结果', '持续跟进'],
    ],
    journeyProblems: [
      { title: '车载重量、物流', items: ['每日数据较多，进出场都需记录，数据量大无法快速查找', '物流信息和延误信息无法实时掌握', '装车时无法掌握车辆状态，记录操作繁琐'] },
      { title: '温湿度', items: ['无法实时掌握信息，只能现场查', '一大堆数据记录，找关键信息效率低'] },
      { title: '标缸', items: ['标缸费时费力，有时无法掌握进度', '缸类问题手动标记，容易遗忘操作'] },
    ],
    journeySolutions: ['整合功能优化首页看板', '采用更合理的交互方法降低学习成本', '视觉降噪增加读取效率', '增加多维度数据分析', '选用合适图表进行信息的有效透传'],
    journeyCopyTitle: '从行为到问题，再到解决',
    journeyCopy: '把搜索数据、实时监控、现场操控三个阶段的行为串起来，问题集中在车载物流、温湿度和标缸三类；对应的解法落在看板整合、交互方式、视觉降噪、多维分析和图表选型上。',

    needsTitle: '需求分析',
    venn: ['温度、湿度', '标缸重量', '重量、物流信息'],
    needsHeadline: '根据立项过程中**代入角色**步骤发现**需求点**',
    needsPoints: [
      { title: '生产流程', text: '为了出酒质量，需要人力查看、记录不同指标的变化；需要时无法快速确定实时温度，质量不达标时也无法快速复盘到生产流程中具体哪一步出了问题。' },
      { title: '物流流程', text: '入场卡车需要手动更迭时间顺序，操作路径过多，尤其在人员倒班时容易出现纰漏；查漏补缺时在每月海量信息里找不到有效信息。出场卡车从仓库装入的货物需要手动清点，物流时间点等关键信息无法有效透传，因此需要把此类数据整合。' },
    ],

    goalsTitle: '明确设计目标',
    goals: [
      { title: '内容分级让读取信息更加高效', text: '在大量的信息中，更直观地筛选出常见、有效的数据。' },
      { title: '提供有高价值的数据', text: '采用更直观易懂、降低干扰的设计风格，提供所需的高价值数据。' },
      { title: '提升操作效率', text: '整合页面核心数据，将关键信息和操作突出设计，增强用户读取效能。' },
      { title: '增强多角色异步协同', text: '为了保证团队协作效率，增加组件参数一致性，保证页面快速适配不同显示器参数。' },
    ],

    contentTitle: '内容分级让读取信息更加高效',
    layersPoint: { title: '页面构成框架和布局规范', text: '为了将页面有效布局，将页面内容分为四大层级：背景层、导航跳转层、信息内容层、局部弹窗层。' },
    layers: ['局部弹窗层', '信息内容层', '导航跳转层', '背景层'],
    dashboardPoint: '看板：四条原则',
    dashboardPoints: [
      { title: '清晰含义的标题', text: '明确的标题可以迅速传达数据表达的内容，再根据内容拟定标题，一目了然。' },
      { title: '合适的图标设计', text: '图标是 UI 设计中必不可少的组成，把某个概念转换成清晰可读的图形，降低理解成本、提升界面美观度。' },
      { title: '遵守米勒定律', text: '内容过少说明分发不够高效，内容过多会造成视觉噪点过多，因此固定信息数量，其余信息在“更多”里跳转查看。' },
      { title: '合理布局，信息规划合理', text: '板块合理分布、各板块高度一致，保证页面视觉动线不过于混乱，符合人眼的基本查看规律。' },
    ],
    tablePoint: '表格：对齐、间距、行高与单元格',
    tablePoints: [
      { title: '对齐方式', text: '标题和内容采用左对齐，视觉统一。' },
      { title: '列的间距', text: '网页尺寸变化时，表格需要适配不同分辨率：固定两边边距，列之间的间距随分辨率做相等的变化。' },
      { title: '行的设计', text: '制定合适的行高，提高信息读取率。' },
      { title: '单元格高度', text: '根据盒子原理，每个单元格高度 = 内容高度 + 上下间距；文字行高 = 1.5 × 字号。' },
    ],

    dataTitle: '提供有高价值的数据',
    chartsPoint: { title: '数据图表化', text: '采用合适图表，让复杂的数据具有可量化、直观的标准。通过大量人物画像、代入角色，清晰了解用户需要的量化指标后，再设计出直观的数据图形：清楚表达目前的工作进度和每日任务量，并给出优、良、差的清晰评分标准，了解当前的工作质量与效率。' },
    chartsCopyTitle: '一眼看懂今天的完成度',
    chartsCopy: '红、橙、绿三档评分对应差、良、优；同一张卡片同时给出过秤货车、窖池测量、新缸标注三项进度。',
    tableFramePoint: { title: '优化表格框架', text: '根据米勒定律，列表信息尽量控制在定律的数量之中，减少阅读障碍；列表的标题和列的数量尽量选择用户关心的数据进行展示。' },
    colBlocks: ['基本信息', '数据信息', '状态信息'],
    hoverPoint: { title: '鼠标悬停', text: '鼠标悬停时，单元格背景色填充，方便用户对齐数据，减少查看误差。' },

    efficiencyTitle: '提升操作效率',
    efficiencyPoint: { title: '将关键数据整合，增加读取信息的效率', text: '归纳核心数据，通过合适的设计把复杂数据做到可量化、直观。物流信息采用卡片式布局而不是单一列表页，把装载状态分为三档：装载率越低的车辆，警告越严重，提醒用户继续加装货物以达到单车装载利用率指标；并用情感化设计给“未装满”增加趣味，降低学习成本。' },
    trucksCopyTitle: '物流信息卡片',
    trucksCopy: '装载率、有效载荷、运单号、车牌号集中在一张卡片里，红 / 橙 / 绿对应三档装载状态。',
    effItems: [
      { title: '物流信息', text: '物流信息是平台的高频操作板块，仓库人员在这里完成物流全流程。实地考察物流车辆如何装配后，界面把货架分为上、中、下三层，让用户快速直观地知道货架剩余空间。' },
      { title: '拖拽式交互', text: '拖拽所选列表后，以拟物图展示包裹数量和总重等关键信息，提升感官反馈，尽量让用户凭本能操作。' },
      { title: '采用长按式交互', text: '装车后可能会即时批准发车，一旦出错就是成本损失。对于这类不可逆操作，弹窗确认会造成阻断感，阅读弹窗文字也增加操作时长——改为按住鼠标左键三秒才能完成装车。' },
      { title: '引导提示', text: '长按不是常用交互，所以加了引导提示：只单击按钮时触发引导，点击任意键后提示消失——在提示的同时，也减少对操作连贯性的打断。' },
    ],

    synergyTitle: '增强多角色异步协同',
    gridPoint: { title: '采用 24 栅格化', text: '栅格系统由列和槽交替分布形成：列 = 栏 + 槽，槽用来调节相邻两栏的间距、把控页面留白。本次采用 24 栅格，以 4px 为原子单位（1440 = 80 + 12×2 + 23×8 + 48×24）。' },
    gridLabels: { gutter: '槽 8px', column: '栏 48px', margin: 'Margin 12px', width: '1336px' },
    colorPoint: { title: 'Color / 色彩', text: '设计完整的平台色彩规范组件库，与开发对接更加顺畅，减少开发在 CSS 代码上的耗时，达到降本增效的目的。' },
    swatches: [
      { name: 'Brand Color', value: '#346BFE' },
      { name: 'Danger Color', value: '#FC6883 → #FB3541' },
      { name: 'Warning Color', value: '#FBB924 → #FF8F28' },
      { name: 'Success Color', value: '#32D7B9 → #0DAAA1' },
    ],
    colorHeaders: ['名称', '色值', '用途', '示例'],
    grayTitle: 'Gray Color',
    grayRows: [
      ['Gray 1', '#FFFFFF', '白色'], ['Gray 2', '#FAFAFC', '背景色（页面）'], ['Gray 3', '#F4F6FB', '背景色（区域）'],
      ['Gray 4', '#E7E8E9', '分割线 / 边框 / 失效背景'], ['Gray 5', '#CBCCD0', '失效文字 / 提示文字'],
      ['Gray 6', '#8C919B', '辅助文字 / 说明文字'], ['Gray 7', '#515462', '主要文字 / 正文'], ['Gray 8', '#000000', '黑色'],
    ],
    blueTitle: 'Brand Color',
    blueRows: [
      ['Blue 1', '#EFF3FA', '选中背景色'], ['Blue 3', '#6E95FD', '外发光 / 全局提示边框线'], ['Blue 5', '#4779FE', '悬停色'],
      ['Blue 6', '#346BFE', '默认色 / 链接文字'], ['Blue 7', '#2A56CB', '点击色'], ['Blue 9', '#152B66', '—'],
    ],
    fontPoint: { title: 'Font / 字体', text: '设计完整的平台字体规范组件库，与开发对接更加顺畅，减少开发在 CSS 代码上的耗时。' },
    fontFamilyTitle: 'Font Family',
    fontFamilyNote: '字体是 UI 设计中最基本的构成之一：字体家族、使用规范（字号、行高、字重、颜色）',
    fontFamilies: [
      { glyph: '矽', label: '中文', family: 'PingFang SC' },
      { glyph: 'Aa', label: '英文', family: 'SF Pro Display' },
      { glyph: '123', label: '数字', family: 'SF Pro Display' },
    ],
    fontSizesTitle: 'Font Sizes',
    fontHeaders: ['Example', 'Size / line height', 'Usage'],
    fontSizes: [
      { size: 24, lh: 32, usage: 'Big Title' }, { size: 20, lh: 28, usage: 'Title' }, { size: 18, lh: 24, usage: 'Main Head' },
      { size: 14, lh: 20, usage: 'Text' }, { size: 12, lh: 16, usage: 'Little Text' },
    ],

    verifyTitle: '设计结果验证',
    verifyPoint: { title: '操作监控效率提升明显', text: '根据带入的工作场景，团队成员在新平台与旧平台的操作对比中得到反馈和数据验证。' },
    bars: [
      { label: '开发效率', pct: 76, up: true },
      { label: '空车率', pct: 12, up: false },
      { label: '操作事故率', pct: 32, up: false },
    ],

    alts: {
      hero: '计量管理平台——看板、汽车衡与砝码的 3D 示意图',
      dashboard: '数据看板：总览、延迟抵达、日常计划、可用卡车、异常温度',
      parcel: '包裹列表与单元格标注',
      parcelHover: '包裹列表：分组列与悬停高亮行',
      trucks: '物流信息卡片：车辆装载率',
      load: '货仓空间与可用包裹',
      drag: '拖拽包裹到货架',
      longpress: '长按 3 秒完成装车',
      guide: '长按操作的引导提示',
      gauge: '日常计划仪表盘卡片',
      west: '曲房温度卡片',
      photo: '实地调研照片',
    },
  },
}
