export type SceneCopy = {
  id: string
  act: string
  eyebrow: string
  title: string
  body: string
  secondary?: string
  quote?: string
  microcopy?: string
}

export const sceneSections: SceneCopy[] = [
  {
    id: 'intro-field',
    act: 'Sridhar Vembu',
    eyebrow: 'The Man Who Walked Back',
    title: 'A global company, rooted in a village road.',
    body: 'Before the contrarian thesis became famous, there was a simpler decision: return to a place most people were trained to leave.',
    secondary: 'This is not a retreat. It is a different center of gravity.',
    microcopy: 'Scroll to enter the field notebook.',
  },
  {
    id: 'hero-soil',
    act: 'Act 1',
    eyebrow: 'The Silence Of The Soil',
    title: 'They said the future was built in glass towers.',
    body: 'Sridhar Vembu built Zoho without venture capital, without an IPO, without selling the company, and without leaving his deepest convictions behind.',
    secondary: 'He built it in the mud.',
    quote: 'The most radical thing he did was not becoming global. It was coming back.',
  },
  {
    id: 'origin-rank',
    act: 'Act 2',
    eyebrow: 'Thanjavur. Tamil Medium. Rank 27.',
    title: 'Rank 27 in the nation.',
    body: 'Tamil-medium school. No elite English coaching machine. No polished metro advantage. Just a boy from a modest household who was very, very good at mathematics.',
    secondary: 'His father worked as a stenographer. The family lived carefully. At IIT Madras, Sridhar needed tuition work to support himself.',
    microcopy: 'The first system he beat was not software. It was access.',
  },
  {
    id: 'departure',
    act: 'Act 2',
    eyebrow: 'The Plane Did Not End The Story',
    title: 'The usual story would have ended in America.',
    body: 'IIT. Princeton. PhD in Electrical Engineering. Qualcomm. San Diego. The Bay Area. Every milestone said the same thing: stay here, climb higher, become safe.',
    secondary: 'But safety was never the point.',
    microcopy: 'Destination: not final.',
  },
  {
    id: 'trade-show',
    act: 'Act 2',
    eyebrow: 'The Trade Show Booth',
    title: 'A Princeton PhD stood in a booth and learned to sell.',
    body: 'In 1996, AdventNet began not as a giant vision deck, but as a small software company selling network management tools. Sridhar manned booths, talked to customers, and listened.',
    quote: 'Before Zoho became a suite, it was a table, a brochure, and a founder learning what pain sounded like.',
  },
  {
    id: 'crash',
    act: 'Act 3',
    eyebrow: 'Business Dried Up',
    title: 'Then the market disappeared.',
    body: 'By 2000, AdventNet was on track for serious revenue. Then the dot-com crash wiped out the telecom market that fed the company. The business did not decline politely. It dried up.',
    secondary: 'Revenue fell. The pressure rose.',
    microcopy: 'This is where most companies stop being themselves.',
  },
  {
    id: 'choice',
    act: 'Act 3',
    eyebrow: 'Like A Good Man, He Said No',
    title: 'The easiest money came with the hardest consequence.',
    body: 'VC money was available. It could have saved the company quickly. But it would have changed the company permanently.',
    secondary: 'Like a good man, he said no to the money.',
  },
  {
    id: 'system',
    act: 'Act 3',
    eyebrow: 'Build. Not Buy.',
    title: 'He did not buy the future. He built it.',
    body: 'Zoho’s system grew differently: no acquisition spree, no rented identity, no user-data business hiding under free software. Product after product was built in-house until the suite became an ecosystem.',
    quote: 'Software is a craft. You chip away at what is not working.',
  },
  {
    id: 'zoho',
    act: 'Act 3',
    eyebrow: 'Zoho, As A Company That Refused The Script',
    title: 'Zoho is the proof that the refusal was not symbolic.',
    body: 'The argument became software: CRM, finance, collaboration, analytics, IT, HR, support, and operations. A global suite built without venture capital, without an IPO clock, and without turning users into advertising inventory.',
    secondary: 'The company is not a footnote to the philosophy. It is the evidence.',
    quote: 'A product ecosystem can grow like a field: slowly, deliberately, and from the same soil.',
  },
  {
    id: 'schools',
    act: 'Act 4',
    eyebrow: 'Passion Outranks Paper',
    title: 'Six students. No degrees. No apology.',
    body: 'In 2005, Zoho Schools began with six rural high-school students. The idea was almost offensive to the credential economy: train them deeply, pay them while they learn, and let skill outrank paper.',
    secondary: 'A degree can certify learning. It cannot replace it.',
  },
  {
    id: 'return',
    act: 'Act 4',
    eyebrow: '2019, Against The Current',
    title: 'Then he returned.',
    body: 'In 2019, after decades near the center of the technology world, Sridhar Vembu moved to Mathalamparai, a village in Tamil Nadu near the Western Ghats.',
    secondary: 'What looked like retreat was actually alignment.',
    microcopy: 'Silicon Valley was not rejected. It was put in its place.',
  },
  {
    id: 'philosophy',
    act: 'Act 4',
    eyebrow: 'Patience Is A Technology',
    title: 'Patience is a technology.',
    body: 'His philosophy is not nostalgia. It is not anti-technology. It is anti-impatience. Anti-extraction. Anti-theater.',
    secondary: 'The opposite of speed is not slowness. Sometimes it is durability.',
  },
  {
    id: 'complicated',
    act: 'Act 4',
    eyebrow: 'Not A Saint. A Human.',
    title: 'Real people do not fit inside clean myths.',
    body: 'A serious tribute must leave room for complexity. Sridhar Vembu’s public life includes admiration, influence, political controversy, and personal legal scrutiny.',
    secondary: 'The question is not whether he is simple. The question is whether the work forces us to think.',
  },
  {
    id: 'math',
    act: 'Act 5',
    eyebrow: 'The Math Of Refusal',
    title: 'The numbers are strange because the choices were strange.',
    body: 'The achievement is not that Zoho became large. Many companies become large. The achievement is that Zoho became large without becoming someone else’s machine.',
  },
  {
    id: 'finale',
    act: 'Act 5',
    eyebrow: 'The Signal From The Soil',
    title: 'The signal has always come from the soil.',
    body: 'A company can be global without being uprooted. A technologist can be ambitious without worshipping speed. A founder can build for the world and still answer to a village road at sunrise.',
    secondary: 'Sridhar Vembu did not prove that everyone should leave the city. He proved that the center was never fixed.',
    quote: 'Maybe the future does not arrive from above. Maybe it grows from underneath.',
  },
]

export const stats = [
  { label: '130M+ users', detail: 'without selling them as the product' },
  { label: '55+ products', detail: 'built more than bought' },
  { label: '150+ countries', detail: 'served from a company that still thinks from rural India' },
  { label: 'No VC. No IPO.', detail: 'not as branding, but as operating discipline' },
  { label: '15-20%', detail: 'engineers without college degrees in common public descriptions' },
]

export const nonRenderedSourceNotes = [
  'Zoho Our Story: private, no VC, no IPO, no acquisition, 2005 education experiment, nearly 15% from Zoho Schools.',
  'Zoho About Us: 2025 Chief Scientist transition; Zoho University launch in 2005.',
  'Zoho 25 People: first Zoho Schools cohort of six high-school graduates from rural India.',
  'Forbes India 2020: Mathalamparai/Tenkasi, Western Ghats, October 2019 move, rural office context.',
  'Zoho Privacy: no advertising revenue and no selling user information for advertising.',
  'NDTV/The News Minute reporting: legal dispute claims and responses should be handled neutrally.',
]
