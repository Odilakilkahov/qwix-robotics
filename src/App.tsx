import type { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import {
  Cpu, Radio, ShieldCheck, Users, Clock, Wallet, Laptop, Sparkles, ChevronRight,
  Lightbulb, DoorOpen, Siren, TrafficCone, Leaf, RadioTower, LayoutDashboard, Award,
} from 'lucide-react'

// Контакт для записи: до запуска бота — личка координатора.
export const SIGNUP_URL = 'https://t.me/odil_akilkhanov'
// Самостоятельный видео-курс «Mars Base» — оплата сразу на Gumroad.
export const GUMROAD_URL = 'https://1000prompts.gumroad.com/l/epglkc'

const fadeUp: Variants = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }

function Section({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <motion.section id={id} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}
      className={`mx-auto w-full max-w-[1120px] px-5 py-20 md:px-8 md:py-28 ${className}`}>
      {children}
    </motion.section>
  )
}

function Button({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return (
    <motion.a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
      className={`inline-flex h-12 items-center gap-2 rounded-lg px-6 text-[15px] font-semibold transition-colors duration-300 ${
        secondary ? 'border border-line bg-surface text-fg hover:border-muted' : 'bg-accent text-bg hover:bg-accent-strong'}`}>
      {children}
    </motion.a>
  )
}

const steps = [
  { icon: Laptop, t: 'Открываем браузер', d: 'Ноутбук или ПК с Chrome. Ребёнок входит в класс по короткой ссылке и псевдониму — без почты и паролей.' },
  { icon: Cpu, t: 'Собираем схему', d: 'Виртуальная плата Arduino, светодиод-маяк, зуммер. Наставник видит экран каждого и подсказывает, куда идёт какой провод.' },
  { icon: Radio, t: 'Запускаем базу', d: 'Пишем код из блоков, нажимаем «Моделирование» — маяк мигает, сирена звучит. Проект остаётся в аккаунте ребёнка.' },
]

const missions = [
  { icon: Lightbulb, t: 'Навигационный маяк', d: 'цепь, резистор, мигание' },
  { icon: DoorOpen, t: 'Кнопка шлюза', d: 'вход, условие если/иначе' },
  { icon: Siren, t: 'Сигнализация пылевой бури', d: 'датчик света, звук' },
  { icon: TrafficCone, t: 'Светофор космодрома', d: 'последовательности' },
  { icon: Leaf, t: 'Умная теплица', d: 'датчик температуры, пороги' },
  { icon: RadioTower, t: 'Антенна и шлагбаум', d: 'сервопривод, градусы' },
  { icon: LayoutDashboard, t: 'Панель управления базой', d: 'всё вместе в одной системе' },
  { icon: Award, t: 'Демо-день', d: 'ребёнок защищает проект перед родителями' },
]

const parents = [
  { icon: Users, t: 'Мини-группа до 6 детей', d: 'Наставник успевает к каждому. Дети 8–14 лет, схожий возраст в группе.' },
  { icon: ShieldCheck, t: 'Безопасность онлайн', d: 'Наставник общается с ребёнком только на уроке. Все вопросы — через родителя. Никаких фото и видео детей без вашего письменного согласия.' },
  { icon: Wallet, t: 'Честные условия', d: 'Цена окончательная, без скрытых платежей, пеней и штрафов. Возврат за непроведённые уроки — в течение 10 дней, без удержаний.' },
  { icon: Clock, t: 'Ничего покупать не нужно', d: 'Весь первый месяц — в бесплатном симуляторе Tinkercad. Наборы за 150–200 $ не нужны.' },
]

const faq = [
  ['Что нужно для занятий?', 'Компьютер или ноутбук с Chrome, мышка, наушники с микрофоном и интернет. Планшет и телефон не подходят — схемы удобно собирать мышкой.'],
  ['Ребёнок никогда не программировал. Подойдёт?', 'Да. Начинаем с блоков, как в конструкторе. Код текстом показываем только тем, кто просит сам.'],
  ['А если пропустил урок?', 'Один урок в месяц можно отработать с параллельной группой. Наставник пришлёт схему урока, чтобы закрепить дома.'],
  ['Как проходит пробный воркшоп?', '35 минут онлайн в Google Meet. Ребёнок собирает сигнализацию марсианской базы и показывает результат родителям. Бесплатно, без обязательств.'],
  ['Как платить?', 'На расчётный счёт ООО «QWIX GROUP» в сумах по курсу ЦБ на день оплаты. Оплата — это принятие публичной оферты.'],
]

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      {/* Nav */}
      <motion.header initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="sticky top-0 z-20 border-b border-line/80 bg-bg/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5 md:px-8">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-accent text-bg"><Cpu size={16} /></span>
            QWIX Robotics
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
            <a className="transition-colors hover:text-fg" href="#how">Как проходит</a>
            <a className="transition-colors hover:text-fg" href="#program">Программа</a>
            <a className="transition-colors hover:text-fg" href="#parents">Родителям</a>
            <a className="transition-colors hover:text-fg" href="#price">Цена</a>
          </nav>
          <Button href={SIGNUP_URL}>Записаться <ChevronRight size={16} /></Button>
        </div>
      </motion.header>

      {/* Hero */}
      <Section className="pt-16 md:pt-24">
        <motion.p variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
          <Sparkles size={14} className="text-accent" /> Бесплатный пробный воркшоп · дети 8–14 лет · онлайн
        </motion.p>
        <motion.h1 variants={fadeUp} className="max-w-[820px] text-[40px] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[64px]">
          Ребёнок соберёт свою первую сигнализацию марсианской базы за 35 минут
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-[640px] text-lg leading-relaxed text-muted md:text-[22px]">
          Робототехника на виртуальном Arduino прямо в браузере. Без покупки наборов, в мини-группе до 6 детей, с живым наставником.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
          <Button href={SIGNUP_URL}>Записаться на бесплатный воркшоп <ChevronRight size={16} /></Button>
          <Button href="#how" secondary>Как это проходит</Button>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
          {[['35 мин', 'пробный воркшоп'], ['до 6', 'детей в группе'], ['0 сум', 'на наборы и детали'], ['8 миссий', 'в первом месяце']].map(([n, l]) => (
            <div key={l} className="bg-surface p-5">
              <div className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">{n}</div>
              <div className="mt-1 text-sm text-muted">{l}</div>
            </div>
          ))}
        </motion.div>
      </Section>

      {/* How */}
      <Section id="how">
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-[-0.02em] md:text-5xl">Как проходит пробный воркшоп</motion.h2>
        <motion.p variants={fadeUp} className="mt-4 max-w-[600px] text-muted">35 минут в Google Meet. В конце ребёнок зовёт родителей к экрану и показывает работающую систему.</motion.p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map(({ icon: Icon, t, d }, i) => (
            <motion.div key={t} variants={fadeUp} whileHover={{ y: -4 }} className="rounded-xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-muted/60">
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent"><Icon size={20} /></span>
                <span className="text-sm text-muted">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Program */}
      <Section id="program">
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-[-0.02em] md:text-5xl">8 миссий первого месяца</motion.h2>
        <motion.p variants={fadeUp} className="mt-4 max-w-[640px] text-muted">
          Сюжет — «Инженерная станция QWIX: автоматизация марсианской базы». Каждый урок — рабочее устройство, которое ребёнок показывает дома.
        </motion.p>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {missions.map(({ icon: Icon, t, d }, i) => (
            <motion.div key={t} variants={fadeUp} whileHover={{ y: -3 }} className="rounded-xl border border-line bg-surface p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent"><Icon size={18} /></span>
                <span className="text-xs font-medium text-muted">Урок {i + 1}</span>
              </div>
              <h3 className="mt-4 font-semibold leading-snug">{t}</h3>
              <p className="mt-1 text-sm text-muted">{d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Parents */}
      <Section id="parents">
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-[-0.02em] md:text-5xl">Родителям — коротко и честно</motion.h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {parents.map(({ icon: Icon, t, d }) => (
            <motion.div key={t} variants={fadeUp} className="flex gap-4 rounded-xl border border-line bg-surface p-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent"><Icon size={20} /></span>
              <div>
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Price */}
      <Section id="price">
        <motion.div variants={fadeUp} className="grid gap-8 rounded-2xl border border-line bg-surface p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] md:text-4xl">Сначала бесплатно. Потом — если понравилось</h2>
            <p className="mt-4 text-muted">Пробный воркшоп ни к чему не обязывает. Курс — помесячно, уйти можно в любой момент с возвратом за непроведённые уроки.</p>
            <ul className="mt-6 space-y-2 text-sm text-fg/90">
              {['8 живых уроков по 45 минут в месяц (2 раза в неделю)', 'Мини-группа до 6 детей, наставник видит экран каждого', 'Отчёт родителям после каждого урока', 'Без наборов — всё в бесплатном симуляторе'].map((x) => (
                <li key={x} className="flex gap-2"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ok" />{x}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between rounded-xl border border-line bg-bg p-6">
            <div>
              <video
                src={`${import.meta.env.BASE_URL}demo-reel.mp4`}
                poster={`${import.meta.env.BASE_URL}demo-poster.jpg`}
                autoPlay loop muted playsInline
                className="mb-6 w-full rounded-lg border border-line"
              />
              <div className="text-sm text-muted">Пробный воркшоп</div>
              <div className="mt-1 text-3xl font-semibold">0 сум</div>
              <div className="mt-6 text-sm text-muted">Курс, за месяц</div>
              <div className="mt-1 text-3xl font-semibold">570 000 сум</div>
              <div className="text-xs text-muted">эквивалент 45 $ по курсу ЦБ на день оплаты</div>
            </div>
            <div className="mt-8"><Button href={SIGNUP_URL}>Записаться на воркшоп <ChevronRight size={16} /></Button></div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-6 grid gap-6 rounded-2xl border border-line bg-surface p-8 md:grid-cols-[1.2fr_1fr] md:items-center md:p-12">
          <div>
            <div className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">Без группы и расписания</div>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">«Mars Base»: курс в видео, 8 миссий, в своём темпе</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">Те же 8 инженерных миссий, что в живом курсе — но на видео с озвучкой, плюс PDF-гид с кодом и схемами для каждой миссии. Ребёнок смотрит и повторяет в Tinkercad сам, в любое время, навсегда остаётся у вас.</p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="text-right md:text-right">
              <div className="text-sm text-muted">Разовая покупка</div>
              <div className="text-3xl font-semibold">$15</div>
            </div>
            <Button href={GUMROAD_URL}>Купить видео-курс <ChevronRight size={16} /></Button>
          </div>
        </motion.div>
      </Section>

      {/* FAQ */}
      <Section>
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-[-0.02em] md:text-5xl">Вопросы родителей</motion.h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {faq.map(([q, a]) => (
            <motion.details key={q} variants={fadeUp} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {q}<ChevronRight size={18} className="shrink-0 text-muted transition-transform duration-300 group-open:rotate-90" />
              </summary>
              <p className="mt-3 max-w-[720px] text-sm leading-relaxed text-muted">{a}</p>
            </motion.details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <motion.div variants={fadeUp} className="relative overflow-hidden rounded-2xl border border-line bg-surface p-10 text-center md:p-16">
          <motion.div aria-hidden animate={{ opacity: [0.35, 0.6, 0.35] }} transition={{ duration: 5, repeat: Infinity }}
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
          <h2 className="relative text-3xl font-semibold tracking-[-0.02em] md:text-5xl">Запишите ребёнка на бесплатный воркшоп</h2>
          <p className="relative mx-auto mt-4 max-w-[560px] text-muted">Напишите координатору в Telegram: имя и возраст ребёнка, удобное время. Пришлём ссылку на Google Meet и памятку на 3 минуты.</p>
          <div className="relative mt-8 flex justify-center"><Button href={SIGNUP_URL}>Написать в Telegram <ChevronRight size={16} /></Button></div>
        </motion.div>
      </Section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-3 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <div>© {new Date().getFullYear()} ООО «QWIX GROUP», Ташкент · QWIX Robotics</div>
          <div className="flex gap-5">
            <a className="transition-colors hover:text-fg" href="#price">Публичная оферта</a>
            <a className="transition-colors hover:text-fg" href={SIGNUP_URL} target="_blank" rel="noreferrer">Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
