const experiences = [
  {
    company: 'PrintEnv MMC',
    position: 'Mühasib',
    startDate: '2020-09-02',
    endDate: 'Davam edir',
    duties: [
      'Mağazaya daxil olan məhsullar üzrə qaimələrin 1C proqramına işlənməsi',
      'Məhsulların qiymətlərinin təyin edilməsi',
      'Debitor kreditorların reystrlərinin aparılması və nəzarət olunması',
      'Onlayn hesabatların hazırlanması',
      '...',
    ],
  },
  {
    company: 'EVRASCON ASC',
    position: 'Sənədlərə nəzarət üzrə menecer (Ofis menecer)',
    startDate: '2018-10-29',
    endDate: '2020-08-24',
    duties: [
      'İllik, aylıq, günlük planlama',
      'Forma №2, Forma №3, Forma M29 hazırlanması',
      'Texniki açotların hazırlanması',
      'Gündəlik, aylıq, rüblük, illik hesabatların hazırlanması',
      '...',
    ],
  },
  {
    company: 'EVRASCON ASC',
    position: 'Anbar müdiri',
    startDate: '2017-05-27',
    endDate: '2018-10-29',
    duties: [
      'Ambara daxil olan materiallar üzrə qaimələrin 1C proqramına işlənməsi',
      'Stokda olan materialların idarəsinə nəzarət',
      'Ambarda işləyən heyətin idarə edilməsi',
      '...',
    ],
  },
  {
    company: '"OPTİMAL ELEKTRONİKA" MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ',
    position: 'Kredit mütəxəssisi',
    startDate: '2016-08-01',
    endDate: '2017-10-20',
    duties: [
      'Kreditin verilməsi',
      'Gecikməni minimuma endirmək',
      'Kredit portfelinin idarə olunması',
      '1C proqramında kreditlərin qeydiyyatının alınması',
      '...',
    ],
  },
];

const calculateSummary = () => {
  const totalExperience = experiences.reduce((acc, exp) => {
    const startDate = new Date(exp.startDate);
    const endDate = exp.endDate === 'Davam edir' ? new Date() : new Date(exp.endDate);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return acc + diffDays;
  }, 0);

  const years = Math.floor(totalExperience / 365);
  const remainingDaysAfterYears = totalExperience % 365;
  const months = Math.floor(remainingDaysAfterYears / 30);
  const days = remainingDaysAfterYears % 30;

  return `${years} il ${months} ay ${days} gün`;
};

export { experiences, calculateSummary };
