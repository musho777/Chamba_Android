import { Modal, StyleSheet, View, ScrollView, TouchableOpacity, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Input } from "../../../../ui/Input";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { t } from '../../../../components/lang';
import { AppColors } from "../../../../styles/AppColors";

export const ProfesionsModal = ({ visible, close, onPress }) => {
  const [search, setSearch] = useState('');
  const mainData = useSelector(st => st.mainData);
  const [profesions, setProfesins] = useState([])

  const constProfesions = [
    "Адвокат",
    "Актер",
    "Аналитик",
    "Архитектор",
    "Архитектор программного обеспечения",
    "Банк-менеджер",
    "Библиотекарь",
    "Биолог",
    "Бухгалтер",
    "Водитель",
    "Врач",
    "Ведущий инженер",
    "Гид",
    "Графический дизайнер",
    "Директор",
    "Дизайнер интерьеров",
    "Дизайнер",
    "Дипломат",
    "Журналист",
    "Завхоз",
    "Заместитель директора",
    "Инженер",
    "Инженер-электроник",
    "Инженер-программист",
    "Инвестиционный банкир",
    "Исследователь",
    "Картограф",
    "Классификатор",
    "Копирайтер",
    "Координатор мероприятий",
    "Кредитный аналитик",
    "Ландшафтный дизайнер",
    "Летчик",
    "Логист",
    "Менеджер",
    "Менеджер по продукту",
    "Менеджер по продажам",
    "Менеджер проекта",
    "Младший разработчик",
    "Массажист",
    "Музыкант",
    "Музыкальный педагог",
    "Налоговый консультант",
    "Начальник",
    "Начальник склада",
    "Нотариус",
    "Оператор",
    "Официант",
    "Параллельный программист",
    "Педагог",
    "Пилот",
    "Психолог",
    "Психотерапевт",
    "Продюсер",
    "Программист",
    "Преподаватель",
    "Редактор",
    "Режиссер",
    "Риэлтор",
    "Секретарь",
    "Системный администратор",
    "Системный аналитик",
    "Специалист по безопасности",
    "Специалист по биомедицинским наукам",
    "Специалист по контролю качества",
    "Специалист по логистике",
    "Специалист по маркетингу",
    "Специалист по недвижимости",
    "Специалист по продажам",
    "Специалист по рекламе",
    "Специалист по трудовым отношениям",
    "Специалист по финансовому анализу",
    "Специалист по цифровому маркетингу",
    "Специалист по управлению проектами",
    "Специалист по управлению цепями поставок",
    "Специалист по исследованиям",
    "Специалист по электронике",
    "Стоматолог",
    "Тестировщик",
    "Технический писатель",
    "Тренер",
    "Фармацевт",
    "Финансовый аналитик",
    "Финансовый консультант",
    "Фотограф",
    "Химик",
    "Экономист",
    "Юрист",
    "Банковский клерк",
    "Веб-разработчик",
    "Контент-менеджер",
    "Менеджер по качеству",
    "Медицинская сестра",
    "Неправительственный работник",
    "Общий директор",
    "Охрана",
    "Оптовый менеджер",
    "Планировщик мероприятий",
    "Психиатр",
    "Рекрутер",
    "Социальный работник",
    "Специалист по клиентскому обслуживанию",
    "Специалист по документированию",
    "Специалист по продажам",
    "Специалист по финансовым услугам",
    "Специалист по управлению изменениями",
    "Специалист по обработке данных",
    "Стажер",
    "Транспортный менеджер",
    "Эколог",
    "Интернет-маркетолог",
    "Специалист по научным исследованиям",
    "Программист Java",
    "Программист Python",
    "Специалист по анализу данных",
    "Специалист по управлению рисками",
    "Инженер по автоматизации",
    "Консультант",
    "Специалист по внутреннему контролю",
    "Специалист по бизнес-процессам",
    "Специалист по корпоративным коммуникациям",
    "Специалист по работе с клиентами",
    "Специалист по трудовым отношениям",
    "Специалист по IT-консалтингу",
    "Арт-директор",
    "Дизайнер пользовательского интерфейса",
    "Разработчик игр",
    "Специалист по тестированию",
    "Специалист по информационным технологиям",
    "Специалист по продуктивности",
    "Специалист по UX-исследованиям",
    "Клинический психолог",
    "Даталог",
    "Энергетический менеджер",
    "Кинорежиссер",
    "Курьер",
    "Системный инженер",
    "Секретарь-референт",
    "Логистический менеджер",
    "Управляющий по продажам",
    "Руководитель",
    "Руководитель проекта",
    "Специалист по контенту",
    "Специалист по обслуживанию клиентов",
    "Специалист по обслуживанию сетей",
    "Специалист по кадрам",
    "Специалист по охране труда",
    "Специалист по ритейлу",
    "Специалист по планированию",
    "Специалист по телемаркетингу",
    "Специалист по телефонным продажам",
    "Специалист по анализу рынка",
    "Специалист по промышленной безопасности",
    "Специалист по безопасности данных",
    "Специалист по логистике и снабжению",
    "Специалист по автоматизации",
    "Специалист по системе управления качеством",
    "Специалист по управлению проектами и программами",
    "Специалист по утилизации",
    "Специалист по медицинскому обслуживанию",
    "Специалист по маркетинговым исследованиям",
    "Специалист по управлению контентом",
    "Специалист по обработке информации",
    "Специалист по обслуживанию",
    "Специалист по финансовым операциям",
    "Специалист по качеству",
    "Специалист по разработке программного обеспечения",
    "Специалист по ресурсам",
    "Специалист по управлению изменениями",
    "Специалист по запуску продуктов",
    "Специалист по финансовому контролю",
    "Специалист по CRM",
    "Специалист по поддержке",
    "Специалист по внутренним аудитам",
    "Специалист по программному обеспечению",
    "Специалист по стратегии",
    "Специалист по инвестициям",
    "Специалист по управлению активами",
    "Специалист по внутреннему аудиту",
    "Специалист по продуктам",
    "Специалист по контрактам",
    "Специалист по разработке продуктов",
    "Специалист по тренингам",
    "Специалист по управления персоналом",
    "Специалист по бизнес-аналитике",
    "Специалист по программному обеспечению и системам",
    "Специалист по консалтингу",
    "Специалист по деловой переписке",
    "Специалист по активам",
    "Специалист по клиентскому менеджменту",
    "Специалист по медицинским услугам",
    "Специалист по обработке данных",
    "Специалист по безопасности IT",
    "Специалист по поддержке программного обеспечения",
    "Специалист по управлению бизнесом",
    "Специалист по техническому обслуживанию",
    "Специалист по стратегии и развитию",
    "Специалист по контролю",
    "Специалист по торговле",
    "Специалист по SEO",
    "Специалист по безопасности и охране труда",
    "Специалист по развитию бизнеса",
    "Специалист по обеспечению качества",
    "Специалист по выполнению заказов",
    "Специалист по совместной работе",
    "Специалист по оперативному управлению",
    "Специалист по внедрению",
    "Специалист по качеству обслуживания",
    "Специалист по контролю запасов",
    "Специалист по целям и задачам",
    "Специалист по управлению ресурсами",
    "Специалист по внедрению программного обеспечения",
    "Специалист по внутреннему контролю качества",
    "Специалист по системе управления безопасностью",
    "Специалист по оценке рисков",
    "Специалист по внешним связям",
    "Специалист по сетевым решениям",
    "Специалист по стратегическому управлению",
    "Специалист по внедрению технологий",
    "Специалист по защите информации",
    "Специалист по управлению затратами",
    "Специалист по стратегическому планированию",
    "Специалист по программам развития",
    "Специалист по продовольственной безопасности",
    "Специалист по промышленной автоматизации",
    "Специалист по техническому анализу",
    "Специалист по финансовым стратегиям",
    "Специалист по корпоративному управлению",
    "Специалист по аналитике",
    "Специалист по кредитованию",
    "Специалист по операционному управлению",
    "Специалист по техобслуживанию",
    "Специалист по управлению задачами",
    "Специалист по сетевой безопасности",
    "Специалист по электроснабжению",
    "Специалист по управлению продажами",
    "Специалист по антикризисному управлению",
    "Специалист по благотворительности",
    "Специалист по корпоративным финансам",
    "Специалист по стратегиям управления",
    "Специалист по концепциям",
    "Специалист по бизнес-стратегиям",
    "Специалист по охране окружающей среды",
    "Специалист по медицинской реабилитации",
    "Специалист по системе управления производством",
    "Специалист по внешним аудитам",
    "Специалист по ресурсам человека",
    "Специалист по операционной эффективности",
    "Специалист по управлению потоками",
    "Специалист по информационным системам",
    "Специалист по таможенным услугам",
    "Специалист по импортозамещению",
    "Специалист по корпоративным слияниям",
    "Специалист по международным проектам",
    "Специалист по инжинирингу",
    "Специалист по управлению рисками и кризисами",
    "Специалист по контрагентам",
    "Специалист по информационным технологиям и безопасности",
    "Специалист по продуктам и инновациям",
    "Специалист по целевым аудиториям",
    "Специалист по целям и эффективности",
    "Специалист по управлению цепочками поставок",
    "Специалист по геодезии",
    "Специалист по здравоохранению",
    "Специалист по экологическим вопросам",
    "Специалист по безопасности труда и охране труда",
    "Специалист по ведению документации",
    "Специалист по экономическим исследованиям",
    "Специалист по мониторингу",
    "Специалист по продажам и маркетингу",
    "Специалист по валютному рынку",
    "Специалист по логистике и управлению цепями поставок",
    "Специалист по качеству и безопасности",
    "Специалист по энергетике",
    "Специалист по экологическому управлению",
    "Специалист по управлению бизнес-процессами",
    "Специалист по контентной стратегии",
    "Специалист по технологическим инновациям",
    "Специалист по международному праву",
    "Специалист по корпоративной культуре",
    "Специалист по совместным проектам",
    "Специалист по электронным системам",
    "Специалист по бизнес-имиджу",
    "Специалист по виртуализации",
    "Специалист по страхованию",
    "Специалист по взаимопониманию",
    "Специалист по ключевым показателям",
    "Специалист по конкурентному анализу",
    "Специалист по мобильным приложениям",
    "Специалист по деловой этике",
    "Специалист по развитию рынка",
    "Специалист по безопасному взаимодействию",
    "Специалист по работе с жалобами",
    "Специалист по аудиту и контролю",
    "Специалист по утилизации отходов",
    "Специалист по медицинским технологиям",
    "Специалист по взаимосвязям",
    "Специалист по информационным ресурсам",
    "Специалист по логистике и запасам",
    "Специалист по интеграции",
    "Специалист по методологии",
    "Специалист по исследованию рынка",
    "Специалист по корпоративной ответственности",
    "Специалист по расчетам",
    "Специалист по правовым вопросам",
    "Специалист по цифровым технологиям",
    "Специалист по деловой аналитике",
    "Специалист по охране труда и технике безопасности",
    "Специалист по интернационализации",
    "Специалист по эффективному управлению",
    "Специалист по интеграции системы",
    "Специалист по эффективной коммуникации",
    "Специалист по контролю за качеством",
    "Специалист по личным финансам",
    "Специалист по планированию и контролю",
    "Специалист по многоканальной стратегии",
    "Специалист по преобразованиям",
    "Специалист по оптовым закупкам",
    "Специалист по корпоративному обучению",
    "Специалист по оценке состояния",
    "Специалист по проектам",
    "Специалист по мониторингу и оценке",
    "Специалист по финансам и инвестициям",
    "Специалист по общественным связям",
    "Специалист по разработке программ",
    "Специалист по ресурсному обеспечению",
    "Специалист по клиническим испытаниям",
    "Специалист по безопасности и анализу",
    "Специалист по управлению проектами и производством",
    "Специалист по мобильным технологиям",
    "Специалист по законодательству",
    "Специалист по социальному обеспечению",
    "Специалист по антикризисной политике",
    "Специалист по управлению рисками и конфликтами",
    "Специалист по интернет-торговле",
    "Специалист по внутренним коммуникациям",
    "Специалист по правам человека",
    "Специалист по социальной политике",
    "Специалист по управлению материалами",
    "Специалист по правовому обеспечению",
    "Специалист по трансформации",
    "Специалист по внутренним проверкам",
    "Специалист по внешним рынкам",
    "Специалист по новым технологиям",
    "Специалист по внедрению бизнес-процессов",
    "Специалист по управлению талантами",
    "Специалист по качеству и безопасности продукции",
    "Специалист по контролю за качеством продуктов",
    "Специалист по согласованию",
    "Специалист по оценке эффективности",
    "Специалист по делам молодежи",
    "Специалист по цифровой экономике",
    "Специалист по социальным медиа",
    "Специалист по корпоративным платформам",
    "Специалист по управлению контрактами",
    "Специалист по защите прав потребителей",
    "Специалист по доступности",
    "Специалист по культурным проектам",
    "Специалист по политическим исследованиям",
    "Специалист по разработке и внедрению",
    "Специалист по исследованию и анализу",
    "Специалист по межкультурной коммуникации",
    "Специалист по системам управления",
    "Специалист по планированию и выполнению",
    "Специалист по медицинским услугам и технологиям",
    "Специалист по внутренним процедурам",
    "Специалист по подготовке отчетности",
    "Специалист по управлению качеством и безопасностью",
    "Специалист по бизнес-партнёрствам",
    "Специалист по управлению проектами и процессами",
    "Специалист по созданию ценности",
    "Специалист по цифровым платформам",
    "Специалист по целевым аудиториям и исследованиям",
    "Специалист по клиентоориентированности",
    "Специалист по многоканальному взаимодействию",
    "Специалист по стратегическому взаимодействию",
    "Специалист по внутреннему контролю и аудиту",
    "Специалист по конкурентоспособности",
    "Специалист по правовым вопросам и корпоративной политике",
    "Специалист по стратегическому мышлению",
    "Специалист по внедрению инноваций",
    "Специалист по корпоративным и внешним отношениям",
    "Специалист по внутреннему аудиту и контролю качества",
    "Специалист по исследованию и разработке",
    "Специалист по оценке влияния",
    "Специалист по научным исследованиям и разработкам",
    "Специалист по научным технологиям",
    "Специалист по клиентским отношениям",
    "Специалист по внешнеэкономической деятельности",
    "Специалист по энергоэффективности",
    "Специалист по интеграции и автоматизации",
    "Специалист по внутреннему качеству",
    "Специалист по новому бизнесу",
    "Специалист по инициативам",
    "Специалист по клиентским услугам",
    "Специалист по эффективной деятельности",
    "Специалист по мониторингу и контролю",
    "Специалист по корпоративному и стратегическому управлению",
    "Специалист по социальным исследованиям",
    "Специалист по процессам",
    "Специалист по цифровой трансформации",
    "Специалист по технологическим решениям",
    "Специалист по международным отношениям",
    "Специалист по стратегическим инициативам",
    "Специалист по клиентскому обслуживанию",
    "Специалист по оценке состояния и развития",
    "Специалист по правам и свободам человека",
    "Специалист по управлению качеством услуг",
    "Специалист по оценке соответствия",
    "Специалист по научно-исследовательским проектам",
    "Специалист по исследованию потребительского поведения",
    "Специалист по медицинским стандартам",
    "Специалист по производственной безопасности",
    "Специалист по научным исследованиям",
    "Специалист по этическим вопросам",
    "Специалист по научному сотрудничеству",
    "Специалист по политическим вопросам",
    "Специалист по оценке социальных программ",
    "Специалист по стратегическому планированию",
    "Специалист по исследованию общественного мнения",
    "Специалист по персоналу и управлению персоналом",
    "Специалист по взаимодействию с клиентами",
    "Специалист по проектному управлению",
    "Специалист по контролю за соблюдением",
    "Специалист по эффективному взаимодействию",
    "Специалист по правовым вопросам и правоприменению",
    "Специалист по анализу данных",
    "Специалист по эффективному распределению ресурсов",
    "Специалист по управлению операциями",
    "Специалист по взаимодействию с властями",
    "Специалист по охране здоровья",
    "Специалист по научной политике",
    "Специалист по цифровым медиа",
    "Специалист по контролю качества продукции и услуг",
    "Специалист по логистике и транспортировке",
    "Специалист по операционной эффективности",
    "Специалист по внешним связям",
    "Специалист по распределению ресурсов",
    "Специалист по управлению активами",
    "Специалист по государственным закупкам",
    "Специалист по социальным программам",
    "Специалист по правам детей",
    "Специалист по комплексным решениям",
    "Специалист по бизнес-стратегиям и планированию",
    "Специалист по научным и образовательным программам",
    "Специалист по охране окружающей среды и устойчивому развитию",
    "Специалист по безопасности на производстве",
    "Специалист по программам и проектам",
    "Специалист по интернационализации и интеграции",
    "Специалист по изучению и оценке",
    "Специалист по исследованию и анализу данных",
    "Специалист по социальной ответственности",
    "Специалист по клиентоориентированному сервису",
    "Специалист по эффективному использованию ресурсов",
    "Специалист по правам и свободам личности",
    "Специалист по взаимодействию с образовательными учреждениями",
    "Специалист по научным технологиям и инновациям",
    "Специалист по оценке инновационных решений",
    "Специалист по управлению производством",
    "Специалист по программам и проектам в социальной сфере",
    "Специалист по международным финансовым отношениям",
    "Специалист по цифровым платформам и сервисам",
    "Специалист по научным исследованиям и разработкам",
    "Специалист по экологии и охране окружающей среды",
    "Специалист по экономическим аспектам",
    "Специалист по социальным программам и инициативам",
    "Специалист по правовым вопросам и правозащитной деятельности",
    "Специалист по охране труда и окружающей среды",
    "Специалист по управлению благосостоянием",
    "Специалист по новым стратегиям",
    "Специалист по медицинскому обслуживанию",
    "Специалист по взаимодействию с общественностью",
    "Специалист по научным исследованиям в области здравоохранения",
    "Специалист по правовым и экономическим вопросам",
    "Специалист по корпоративным финансам и управлению",
    "Специалист по научным и образовательным исследованиям",
    "Специалист по цифровой стратегии",
    "Специалист по взаимодействию с клиентами и партнёрами",
    "Специалист по созданию и реализации бизнес-моделей",
    "Специалист по стратегическим проектам",
    "Специалист по правам и свободам человека и гражданина",
    "Специалист по правовым аспектам корпоративной деятельности",
    "Специалист по экономике и финансам",
    "Специалист по ресурсам и финансам",
    "Специалист по международным и межкультурным отношениям",
    "Специалист по этическому регулированию",
    "Специалист по ресурсному обеспечению и устойчивому развитию",
    "Специалист по внедрению и сопровождению программ",
    "Специалист по целям и результатам",
    "Специалист по информационным технологиям и менеджменту",
    "Специалист по правовым и этическим вопросам",
    "Специалист по инновационным и устойчивым решениям",
    "Специалист по научным и исследовательским проектам",
    "Специалист по правовым аспектам и правоприменению",
    "Специалист по научной экспертизе",
    "Специалист по взаимодействию с общественными и частными организациями",
    "Специалист по научному анализу и исследованию",
    "Специалист по правовым исследованиям",
    "Специалист по исследованию влияния",
    "Специалист по взаимодействию с научными и образовательными учреждениями",
    "Специалист по взаимодействию с государственными и частными секторами",
    "Специалист по оценке и анализу общественного мнения",
    "Специалист по стратегии и планированию",
    "Специалист по стратегическому управлению",
    "Специалист по правам и свободам личности и правам человека",
    "Специалист по научным исследованиям и аналитике",
    "Специалист по исследованиям в области экономики и финансов",
    "Специалист по правовым и этическим нормам",
    "Специалист по программам и инициативам в социальной сфере",
    "Специалист по стратегическим и корпоративным вопросам",
    "Специалист по правовым исследованиям и практикам",
    "Специалист по научным исследованиям и внедрению",
    "Специалист по социальным вопросам и инициативам",
    "Специалист по правам человека и социальной политике",
    "Специалист по правовым вопросам и консультациям",
    "Специалист по управлению программами и проектами",
    "Специалист по исследованиям и развитию",
    "Специалист по стратегическим инициативам и проектам",
    "Специалист по взаимодействию с общественностью и СМИ",
    "Специалист по правам человека и правам граждан",
    "Специалист по правовым и социальным вопросам",
    "Специалист по правам и свободам граждан",
    "Специалист по научным и исследовательским вопросам",
    "Специалист по стратегическому и оперативному управлению",
    "Специалист по исследованию и анализу данных в области здравоохранения",
    "Специалист по стратегическим и социальным вопросам",
    "Специалист по взаимодействию с клиентами и партнёрами",
    "Специалист по правам и свободам человека и правам граждан",
    "Специалист по правам человека и социальной политике",
    "Специалист по правовым вопросам и правозащитной деятельности",
    "Специалист по правам и свободам человека и гражданина",
    "Специалист по правам человека и правам граждан",
    "Специалист по правам человека и правам человека",
    "Специалист по правовым и этическим вопросам",
    "Специалист по правам и свободам граждан и правам человека",
    "Специалист по правам человека и правам граждан",
    "Специалист по правам человека и правам человека",
    "Специалист по правам человека и правам человека",
    "Специалист по правам человека и правам человека",
    "Специалист по правам человека и правам граждан",
    "Специалист по правам человека и правам человека",
  ];



  useEffect(() => {
    setProfesins(constProfesions)
  }, [])


  const SearcProfesions = (e) => {
    setSearch(e)
    let data = profesions.filter(elm => elm.toUpperCase().includes(e.toUpperCase()))
    setProfesins(data)
    if (e == '') {
      setProfesins(constProfesions)
    }
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => close()}
          style={styles.centeredView}>
          <View style={styles.modalView}>
            <Input
              onChange={e => {
                SearcProfesions(e);
              }}
              value={search}
              placeholder={t(mainData.lang).search}
            />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={400}
              >
                {profesions.map((elm, i) => (
                  <Text
                    onPress={() => {
                      onPress(elm);
                      close();
                    }}
                    key={i}
                    style={styles.modalText}
                  >{elm}</Text>
                ))}
              </ScrollView>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    height: 300,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
    color: AppColors.BaliHai_Color,
  },
  loadingMore: {
    paddingVertical: 10,
  },
});