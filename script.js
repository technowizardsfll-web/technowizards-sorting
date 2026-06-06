// Language data with flags
const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'he', name: 'עברית', flag: '🇮🇱' },
    { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
    { code: 'sr', name: 'Српски', flag: '🇷🇸' },
    { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
    { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
    { code: 'sl', name: 'Slovenščina', flag: '🇸🇮' },
    { code: 'et', name: 'Eesti', flag: '🇪🇪' },
    { code: 'kk', name: 'Қазақша', flag: '🇰🇿' },
    { code: 'sw', name: 'Kiswahili', flag: '🇰🇪' }
];

// All translations
const translations = {
    en: {
        subtitle: "Discover your Hogwarts house through FLL wisdom!",
        sortedInto: "You have been sorted into...",
        restart: "Take Quiz Again",
        changeLanguage: "Change Language",
        questionOf: "Question {current} of {total}",
        houses: {
            gryffindor: { name: "GRYFFINDOR! 🦁", desc: "You're bold and courageous! You take risks and inspire your team to push boundaries." },
            ravenclaw: { name: "RAVENCLAW! 🦅", desc: "You're innovative and clever! You love researching and engineering creative solutions." },
            hufflepuff: { name: "HUFFLEPUFF! 🦡", desc: "You're dedicated to teamwork! You support others and embody Core Values." },
            slytherin: { name: "SLYTHERIN! 🐍", desc: "You're strategic and competitive! You optimize for maximum performance." }
        },
        questions: [
            {
                q: "Your robot just failed a mission. What do you do?",
                a: [
                    { text: "Try something bold and risky!", house: "gryffindor" },
                    { text: "Research and find the optimal fix", house: "ravenclaw" },
                    { text: "Work together as a team to solve it", house: "hufflepuff" },
                    { text: "Focus on higher-scoring missions instead", house: "slytherin" }
                ]
            },
            {
                q: "What's your favorite part of FLL?",
                a: [
                    { text: "The excitement of competition day!", house: "gryffindor" },
                    { text: "Building innovative robot designs", house: "ravenclaw" },
                    { text: "Working with my teammates", house: "hufflepuff" },
                    { text: "Winning and scoring high points", house: "slytherin" }
                ]
            },
            {
                q: "2 minutes left in your robot run. What's your move?",
                a: [
                    { text: "Go for that risky mission!", house: "gryffindor" },
                    { text: "Execute the most efficient sequence", house: "ravenclaw" },
                    { text: "Cheer on my teammate running the robot", house: "hufflepuff" },
                    { text: "Calculate which mission gives most points", house: "slytherin" }
                ]
            },
            {
                q: "Another team needs help. Do you help?",
                a: [
                    { text: "Jump in immediately!", house: "gryffindor" },
                    { text: "Share technical knowledge to help", house: "ravenclaw" },
                    { text: "Of course - that's what FLL is about!", house: "hufflepuff" },
                    { text: "Quick advice, then focus on our prep", house: "slytherin" }
                ]
            },
            {
                q: "What makes a great FLL team?",
                a: [
                    { text: "Courage to try new things", house: "gryffindor" },
                    { text: "Creative and clever ideas", house: "ravenclaw" },
                    { text: "Strong teamwork and friendship", house: "hufflepuff" },
                    { text: "Strategy and winning mindset", house: "slytherin" }
                ]
            }
        ]
    },
    es: {
        subtitle: "¡Descubre tu casa de Hogwarts a través de FLL!",
        sortedInto: "Has sido seleccionado para...",
        restart: "Repetir Quiz",
        changeLanguage: "Cambiar Idioma",
        questionOf: "Pregunta {current} de {total}",
        houses: {
            gryffindor: { name: "¡GRYFFINDOR! 🦁", desc: "¡Eres audaz y valiente! Tomas riesgos e inspiras a tu equipo." },
            ravenclaw: { name: "¡RAVENCLAW! 🦅", desc: "¡Eres innovador e inteligente! Te encanta investigar y crear soluciones." },
            hufflepuff: { name: "¡HUFFLEPUFF! 🦡", desc: "¡Te dedicas al trabajo en equipo! Apoyas a otros y vives los valores." },
            slytherin: { name: "¡SLYTHERIN! 🐍", desc: "¡Eres estratégico y competitivo! Optimizas para el máximo rendimiento." }
        },
        questions: [
            {
                q: "Tu robot falló una misión. ¿Qué haces?",
                a: [
                    { text: "¡Intentar algo audaz y arriesgado!", house: "gryffindor" },
                    { text: "Investigar y encontrar la solución óptima", house: "ravenclaw" },
                    { text: "Trabajar juntos como equipo", house: "hufflepuff" },
                    { text: "Enfocarse en misiones de más puntos", house: "slytherin" }
                ]
            },
            {
                q: "¿Qué es lo que más te gusta de FLL?",
                a: [
                    { text: "¡La emoción del día de competencia!", house: "gryffindor" },
                    { text: "Construir diseños innovadores", house: "ravenclaw" },
                    { text: "Trabajar con mis compañeros", house: "hufflepuff" },
                    { text: "Ganar y obtener muchos puntos", house: "slytherin" }
                ]
            },
            {
                q: "Quedan 2 minutos. ¿Qué haces?",
                a: [
                    { text: "¡Ir por esa misión arriesgada!", house: "gryffindor" },
                    { text: "Ejecutar la secuencia más eficiente", house: "ravenclaw" },
                    { text: "Animar a mi compañero con el robot", house: "hufflepuff" },
                    { text: "Calcular qué misión da más puntos", house: "slytherin" }
                ]
            },
            {
                q: "Otro equipo necesita ayuda. ¿Ayudas?",
                a: [
                    { text: "¡Saltar a ayudar inmediatamente!", house: "gryffindor" },
                    { text: "Compartir conocimiento técnico", house: "ravenclaw" },
                    { text: "¡Claro - de eso se trata FLL!", house: "hufflepuff" },
                    { text: "Consejo rápido, luego nuestra prep", house: "slytherin" }
                ]
            },
            {
                q: "¿Qué hace un gran equipo FLL?",
                a: [
                    { text: "Valentía para probar cosas nuevas", house: "gryffindor" },
                    { text: "Ideas creativas e inteligentes", house: "ravenclaw" },
                    { text: "Trabajo en equipo y amistad", house: "hufflepuff" },
                    { text: "Estrategia y mentalidad ganadora", house: "slytherin" }
                ]
            }
        ]
    },
    fr: {
        subtitle: "Découvrez votre maison Poudlard à travers FLL!",
        sortedInto: "Vous avez été réparti à...",
        restart: "Recommencer",
        changeLanguage: "Changer de Langue",
        questionOf: "Question {current} sur {total}",
        houses: {
            gryffindor: { name: "GRYFFONDOR! 🦁", desc: "Vous êtes audacieux et courageux! Vous prenez des risques et inspirez votre équipe." },
            ravenclaw: { name: "SERDAIGLE! 🦅", desc: "Vous êtes innovant et intelligent! Vous aimez rechercher et créer des solutions." },
            hufflepuff: { name: "POUFSOUFFLE! 🦡", desc: "Vous êtes dévoué au travail d'équipe! Vous soutenez les autres." },
            slytherin: { name: "SERPENTARD! 🐍", desc: "Vous êtes stratégique et compétitif! Vous optimisez pour la performance maximale." }
        },
        questions: [
            {
                q: "Votre robot a échoué une mission. Que faites-vous?",
                a: [
                    { text: "Essayer quelque chose d'audacieux!", house: "gryffindor" },
                    { text: "Rechercher la solution optimale", house: "ravenclaw" },
                    { text: "Travailler ensemble en équipe", house: "hufflepuff" },
                    { text: "Se concentrer sur les missions à plus de points", house: "slytherin" }
                ]
            },
            {
                q: "Qu'est-ce que vous préférez dans FLL?",
                a: [
                    { text: "L'excitation du jour de compétition!", house: "gryffindor" },
                    { text: "Construire des designs innovants", house: "ravenclaw" },
                    { text: "Travailler avec mes coéquipiers", house: "hufflepuff" },
                    { text: "Gagner et marquer beaucoup de points", house: "slytherin" }
                ]
            },
            {
                q: "Il reste 2 minutes. Que faites-vous?",
                a: [
                    { text: "Tenter cette mission risquée!", house: "gryffindor" },
                    { text: "Exécuter la séquence la plus efficace", house: "ravenclaw" },
                    { text: "Encourager mon coéquipier", house: "hufflepuff" },
                    { text: "Calculer quelle mission rapporte le plus", house: "slytherin" }
                ]
            },
            {
                q: "Une autre équipe a besoin d'aide. Aidez-vous?",
                a: [
                    { text: "Aider immédiatement!", house: "gryffindor" },
                    { text: "Partager des connaissances techniques", house: "ravenclaw" },
                    { text: "Bien sûr - c'est ça FLL!", house: "hufflepuff" },
                    { text: "Conseil rapide, puis notre préparation", house: "slytherin" }
                ]
            },
            {
                q: "Qu'est-ce qui fait une grande équipe FLL?",
                a: [
                    { text: "Le courage d'essayer de nouvelles choses", house: "gryffindor" },
                    { text: "Des idées créatives et intelligentes", house: "ravenclaw" },
                    { text: "Travail d'équipe et amitié", house: "hufflepuff" },
                    { text: "Stratégie et mentalité gagnante", house: "slytherin" }
                ]
            }
        ]
    },
    pt: {
        subtitle: "Descubra sua casa de Hogwarts através de FLL!",
        sortedInto: "Você foi selecionado para...",
        restart: "Refazer Quiz",
        changeLanguage: "Mudar Idioma",
        questionOf: "Pergunta {current} de {total}",
        houses: {
            gryffindor: { name: "GRIFINÓRIA! 🦁", desc: "Você é ousado e corajoso! Assume riscos e inspira sua equipe." },
            ravenclaw: { name: "CORVINAL! 🦅", desc: "Você é inovador e inteligente! Adora pesquisar e criar soluções." },
            hufflepuff: { name: "LUFA-LUFA! 🦡", desc: "Você é dedicado ao trabalho em equipe! Apoia os outros e vive os valores." },
            slytherin: { name: "SONSERINA! 🐍", desc: "Você é estratégico e competitivo! Otimiza para máximo desempenho." }
        },
        questions: [
            {
                q: "Seu robô falhou uma missão. O que você faz?",
                a: [
                    { text: "Tentar algo ousado e arriscado!", house: "gryffindor" },
                    { text: "Pesquisar e encontrar a solução ideal", house: "ravenclaw" },
                    { text: "Trabalhar juntos como equipe", house: "hufflepuff" },
                    { text: "Focar em missões de mais pontos", house: "slytherin" }
                ]
            },
            {
                q: "O que você mais gosta no FLL?",
                a: [
                    { text: "A emoção do dia da competição!", house: "gryffindor" },
                    { text: "Construir designs inovadores", house: "ravenclaw" },
                    { text: "Trabalhar com meus colegas", house: "hufflepuff" },
                    { text: "Vencer e marcar muitos pontos", house: "slytherin" }
                ]
            },
            {
                q: "Restam 2 minutos. O que você faz?",
                a: [
                    { text: "Ir para aquela missão arriscada!", house: "gryffindor" },
                    { text: "Executar a sequência mais eficiente", house: "ravenclaw" },
                    { text: "Torcer pelo colega com o robô", house: "hufflepuff" },
                    { text: "Calcular qual missão dá mais pontos", house: "slytherin" }
                ]
            },
            {
                q: "Outra equipe precisa de ajuda. Você ajuda?",
                a: [
                    { text: "Ajudar imediatamente!", house: "gryffindor" },
                    { text: "Compartilhar conhecimento técnico", house: "ravenclaw" },
                    { text: "Claro - é isso que é FLL!", house: "hufflepuff" },
                    { text: "Conselho rápido, depois nossa prep", house: "slytherin" }
                ]
            },
            {
                q: "O que faz uma grande equipe FLL?",
                a: [
                    { text: "Coragem para tentar coisas novas", house: "gryffindor" },
                    { text: "Ideias criativas e inteligentes", house: "ravenclaw" },
                    { text: "Trabalho em equipe e amizade", house: "hufflepuff" },
                    { text: "Estratégia e mentalidade vencedora", house: "slytherin" }
                ]
            }
        ]
    },
    ru: {
        subtitle: "Узнайте свой факультет Хогвартса через FLL!",
        sortedInto: "Вы распределены в...",
        restart: "Пройти Снова",
        changeLanguage: "Сменить Язык",
        questionOf: "Вопрос {current} из {total}",
        houses: {
            gryffindor: { name: "ГРИФФИНДОР! 🦁", desc: "Вы смелы и отважны! Вы рискуете и вдохновляете команду." },
            ravenclaw: { name: "КОГТЕВРАН! 🦅", desc: "Вы изобретательны и умны! Любите исследовать и создавать решения." },
            hufflepuff: { name: "ПУФФЕНДУЙ! 🦡", desc: "Вы преданы команде! Поддерживаете других и живёте ценностями." },
            slytherin: { name: "СЛИЗЕРИН! 🐍", desc: "Вы стратег и конкурент! Оптимизируете для максимума." }
        },
        questions: [
            {
                q: "Ваш робот провалил миссию. Что делать?",
                a: [
                    { text: "Попробовать что-то смелое!", house: "gryffindor" },
                    { text: "Исследовать и найти решение", house: "ravenclaw" },
                    { text: "Работать вместе как команда", house: "hufflepuff" },
                    { text: "Сосредоточиться на миссиях с большими очками", house: "slytherin" }
                ]
            },
            {
                q: "Что вам больше всего нравится в FLL?",
                a: [
                    { text: "Волнение дня соревнований!", house: "gryffindor" },
                    { text: "Создание инновационных конструкций", house: "ravenclaw" },
                    { text: "Работа с командой", house: "hufflepuff" },
                    { text: "Побеждать и набирать очки", house: "slytherin" }
                ]
            },
            {
                q: "Осталось 2 минуты. Что делать?",
                a: [
                    { text: "Рискнуть с той миссией!", house: "gryffindor" },
                    { text: "Выполнить эффективную последовательность", house: "ravenclaw" },
                    { text: "Поддержать товарища с роботом", house: "hufflepuff" },
                    { text: "Рассчитать максимум очков", house: "slytherin" }
                ]
            },
            {
                q: "Другой команде нужна помощь. Поможете?",
                a: [
                    { text: "Сразу помочь!", house: "gryffindor" },
                    { text: "Поделиться техническими знаниями", house: "ravenclaw" },
                    { text: "Конечно - это суть FLL!", house: "hufflepuff" },
                    { text: "Быстрый совет, потом своя подготовка", house: "slytherin" }
                ]
            },
            {
                q: "Что делает команду FLL великой?",
                a: [
                    { text: "Смелость пробовать новое", house: "gryffindor" },
                    { text: "Творческие и умные идеи", house: "ravenclaw" },
                    { text: "Командная работа и дружба", house: "hufflepuff" },
                    { text: "Стратегия и воля к победе", house: "slytherin" }
                ]
            }
        ]
    },
    zh: {
        subtitle: "通过FLL发现你的霍格沃茨学院！",
        sortedInto: "你被分到了...",
        restart: "重新测试",
        changeLanguage: "更改语言",
        questionOf: "问题 {current} / {total}",
        houses: {
            gryffindor: { name: "格兰芬多！🦁", desc: "你勇敢大胆！你敢于冒险并激励团队。" },
            ravenclaw: { name: "拉文克劳！🦅", desc: "你创新聪明！喜欢研究和创造解决方案。" },
            hufflepuff: { name: "赫奇帕奇！🦡", desc: "你专注于团队合作！支持他人，践行价值观。" },
            slytherin: { name: "斯莱特林！🐍", desc: "你富有策略和竞争力！追求最佳表现。" }
        },
        questions: [
            {
                q: "你的机器人任务失败了。你怎么做？",
                a: [
                    { text: "尝试大胆冒险的方法！", house: "gryffindor" },
                    { text: "研究并找到最佳解决方案", house: "ravenclaw" },
                    { text: "团队一起解决", house: "hufflepuff" },
                    { text: "专注于得分更高的任务", house: "slytherin" }
                ]
            },
            {
                q: "你最喜欢FLL的什么？",
                a: [
                    { text: "比赛日的兴奋！", house: "gryffindor" },
                    { text: "创新机器人设计", house: "ravenclaw" },
                    { text: "与队友合作", house: "hufflepuff" },
                    { text: "获胜和高分", house: "slytherin" }
                ]
            },
            {
                q: "还剩2分钟。你怎么做？",
                a: [
                    { text: "尝试那个冒险任务！", house: "gryffindor" },
                    { text: "执行最有效的顺序", house: "ravenclaw" },
                    { text: "为操作机器人的队友加油", house: "hufflepuff" },
                    { text: "计算哪个任务得分最高", house: "slytherin" }
                ]
            },
            {
                q: "另一个队伍需要帮助。你帮吗？",
                a: [
                    { text: "立刻帮忙！", house: "gryffindor" },
                    { text: "分享技术知识", house: "ravenclaw" },
                    { text: "当然——这就是FLL精神！", house: "hufflepuff" },
                    { text: "快速建议，然后专注自己", house: "slytherin" }
                ]
            },
            {
                q: "什么造就优秀的FLL团队？",
                a: [
                    { text: "尝试新事物的勇气", house: "gryffindor" },
                    { text: "创意和聪明的想法", house: "ravenclaw" },
                    { text: "团队合作和友谊", house: "hufflepuff" },
                    { text: "策略和胜利心态", house: "slytherin" }
                ]
            }
        ]
    },
    ko: {
        subtitle: "FLL을 통해 호그와트 기숙사를 알아보세요!",
        sortedInto: "당신은 배정되었습니다...",
        restart: "다시 하기",
        changeLanguage: "언어 변경",
        questionOf: "질문 {current} / {total}",
        houses: {
            gryffindor: { name: "그리핀도르! 🦁", desc: "당신은 대담하고 용감합니다! 위험을 감수하고 팀에 영감을 줍니다." },
            ravenclaw: { name: "래번클로! 🦅", desc: "당신은 혁신적이고 영리합니다! 연구하고 창의적인 해결책을 만듭니다." },
            hufflepuff: { name: "후플푸프! 🦡", desc: "당신은 팀워크에 헌신합니다! 다른 사람을 지원하고 핵심 가치를 실천합니다." },
            slytherin: { name: "슬리데린! 🐍", desc: "당신은 전략적이고 경쟁적입니다! 최대 성과를 위해 최적화합니다." }
        },
        questions: [
            {
                q: "로봇이 미션에 실패했습니다. 어떻게 하시겠습니까?",
                a: [
                    { text: "대담하고 위험한 것을 시도!", house: "gryffindor" },
                    { text: "연구하고 최적의 해결책 찾기", house: "ravenclaw" },
                    { text: "팀으로 함께 해결하기", house: "hufflepuff" },
                    { text: "더 높은 점수 미션에 집중", house: "slytherin" }
                ]
            },
            {
                q: "FLL에서 가장 좋아하는 것은?",
                a: [
                    { text: "대회 날의 흥분!", house: "gryffindor" },
                    { text: "혁신적인 로봇 설계", house: "ravenclaw" },
                    { text: "팀원들과 함께 일하기", house: "hufflepuff" },
                    { text: "승리하고 높은 점수 얻기", house: "slytherin" }
                ]
            },
            {
                q: "2분 남았습니다. 어떻게 하시겠습니까?",
                a: [
                    { text: "그 위험한 미션에 도전!", house: "gryffindor" },
                    { text: "가장 효율적인 순서 실행", house: "ravenclaw" },
                    { text: "로봇 운영하는 팀원 응원", house: "hufflepuff" },
                    { text: "어떤 미션이 최고 점수인지 계산", house: "slytherin" }
                ]
            },
            {
                q: "다른 팀이 도움이 필요합니다. 도와주시겠습니까?",
                a: [
                    { text: "즉시 도와주기!", house: "gryffindor" },
                    { text: "기술 지식 공유", house: "ravenclaw" },
                    { text: "물론 - 이것이 FLL이니까!", house: "hufflepuff" },
                    { text: "빠른 조언 후 우리 준비에 집중", house: "slytherin" }
                ]
            },
            {
                q: "훌륭한 FLL 팀을 만드는 것은?",
                a: [
                    { text: "새로운 것을 시도하는 용기", house: "gryffindor" },
                    { text: "창의적이고 영리한 아이디어", house: "ravenclaw" },
                    { text: "팀워크와 우정", house: "hufflepuff" },
                    { text: "전략과 승리 마인드", house: "slytherin" }
                ]
            }
        ]
    },
    ar: {
        subtitle: "اكتشف منزلك في هوجورتس من خلال FLL!",
        sortedInto: "لقد تم توزيعك إلى...",
        restart: "أعد الاختبار",
        changeLanguage: "تغيير اللغة",
        questionOf: "السؤال {current} من {total}",
        houses: {
            gryffindor: { name: "جريفندور! 🦁", desc: "أنت جريء وشجاع! تخاطر وتلهم فريقك." },
            ravenclaw: { name: "رافنكلو! 🦅", desc: "أنت مبتكر وذكي! تحب البحث وإيجاد الحلول." },
            hufflepuff: { name: "هافلباف! 🦡", desc: "أنت ملتزم بالعمل الجماعي! تدعم الآخرين وتعيش القيم." },
            slytherin: { name: "سليذرين! 🐍", desc: "أنت استراتيجي وتنافسي! تحسن للأداء الأقصى." }
        },
        questions: [
            {
                q: "فشل روبوتك في مهمة. ماذا تفعل؟",
                a: [
                    { text: "جرب شيئاً جريئاً ومحفوفاً بالمخاطر!", house: "gryffindor" },
                    { text: "ابحث وجد الحل الأمثل", house: "ravenclaw" },
                    { text: "اعمل معاً كفريق", house: "hufflepuff" },
                    { text: "ركز على المهام ذات النقاط الأعلى", house: "slytherin" }
                ]
            },
            {
                q: "ما أكثر شيء تحبه في FLL؟",
                a: [
                    { text: "إثارة يوم المسابقة!", house: "gryffindor" },
                    { text: "بناء تصاميم روبوت مبتكرة", house: "ravenclaw" },
                    { text: "العمل مع زملائي", house: "hufflepuff" },
                    { text: "الفوز وتسجيل نقاط عالية", house: "slytherin" }
                ]
            },
            {
                q: "بقي دقيقتان. ماذا تفعل؟",
                a: [
                    { text: "اذهب لتلك المهمة المحفوفة بالمخاطر!", house: "gryffindor" },
                    { text: "نفذ التسلسل الأكثر كفاءة", house: "ravenclaw" },
                    { text: "شجع زميلي الذي يشغل الروبوت", house: "hufflepuff" },
                    { text: "احسب أي مهمة تعطي أكثر نقاط", house: "slytherin" }
                ]
            },
            {
                q: "فريق آخر يحتاج مساعدة. هل تساعد؟",
                a: [
                    { text: "ساعد فوراً!", house: "gryffindor" },
                    { text: "شارك المعرفة التقنية", house: "ravenclaw" },
                    { text: "بالطبع - هذا هو FLL!", house: "hufflepuff" },
                    { text: "نصيحة سريعة ثم تحضيرنا", house: "slytherin" }
                ]
            },
            {
                q: "ما الذي يصنع فريق FLL رائعاً؟",
                a: [
                    { text: "الشجاعة لتجربة أشياء جديدة", house: "gryffindor" },
                    { text: "أفكار إبداعية وذكية", house: "ravenclaw" },
                    { text: "العمل الجماعي والصداقة", house: "hufflepuff" },
                    { text: "الاستراتيجية وعقلية الفوز", house: "slytherin" }
                ]
            }
        ]
    },
    he: {
        subtitle: "גלה את הבית שלך בהוגוורטס דרך FLL!",
        sortedInto: "מוינת ל...",
        restart: "נסה שוב",
        changeLanguage: "שנה שפה",
        questionOf: "שאלה {current} מתוך {total}",
        houses: {
            gryffindor: { name: "גריפינדור! 🦁", desc: "אתה אמיץ ונועז! לוקח סיכונים ומעורר השראה בצוות." },
            ravenclaw: { name: "רייבנקלו! 🦅", desc: "אתה חדשני וחכם! אוהב לחקור וליצור פתרונות." },
            hufflepuff: { name: "הפלפאף! 🦡", desc: "אתה מסור לעבודת צוות! תומך באחרים ומיישם ערכים." },
            slytherin: { name: "סלית'רין! 🐍", desc: "אתה אסטרטג ותחרותי! ממקסם לביצועים מרביים." }
        },
        questions: [
            {
                q: "הרובוט נכשל במשימה. מה אתה עושה?",
                a: [
                    { text: "לנסות משהו נועז ומסוכן!", house: "gryffindor" },
                    { text: "לחקור ולמצוא את הפתרון האופטימלי", house: "ravenclaw" },
                    { text: "לעבוד יחד כצוות", house: "hufflepuff" },
                    { text: "להתמקד במשימות עם יותר נקודות", house: "slytherin" }
                ]
            },
            {
                q: "מה אתה הכי אוהב ב-FLL?",
                a: [
                    { text: "ההתרגשות ביום התחרות!", house: "gryffindor" },
                    { text: "בניית עיצובי רובוט חדשניים", house: "ravenclaw" },
                    { text: "עבודה עם חברי הצוות", house: "hufflepuff" },
                    { text: "לנצח ולצבור נקודות", house: "slytherin" }
                ]
            },
            {
                q: "נשארו 2 דקות. מה אתה עושה?",
                a: [
                    { text: "ללכת על המשימה המסוכנת!", house: "gryffindor" },
                    { text: "לבצע את הרצף היעיל ביותר", house: "ravenclaw" },
                    { text: "לעודד את חבר הצוות שמפעיל", house: "hufflepuff" },
                    { text: "לחשב איזו משימה נותנת הכי הרבה", house: "slytherin" }
                ]
            },
            {
                q: "צוות אחר צריך עזרה. אתה עוזר?",
                a: [
                    { text: "לעזור מיד!", house: "gryffindor" },
                    { text: "לשתף ידע טכני", house: "ravenclaw" },
                    { text: "כמובן - זה מה ש-FLL זה!", house: "hufflepuff" },
                    { text: "עצה מהירה ואז ההכנה שלנו", house: "slytherin" }
                ]
            },
            {
                q: "מה עושה צוות FLL מצוין?",
                a: [
                    { text: "אומץ לנסות דברים חדשים", house: "gryffindor" },
                    { text: "רעיונות יצירתיים וחכמים", house: "ravenclaw" },
                    { text: "עבודת צוות וחברות", house: "hufflepuff" },
                    { text: "אסטרטגיה וחשיבה מנצחת", house: "slytherin" }
                ]
            }
        ]
    },
    el: {
        subtitle: "Ανακάλυψε το σπίτι σου στο Χόγκουαρτς μέσω FLL!",
        sortedInto: "Τοποθετήθηκες στο...",
        restart: "Ξανά το Κουίζ",
        changeLanguage: "Αλλαγή Γλώσσας",
        questionOf: "Ερώτηση {current} από {total}",
        houses: {
            gryffindor: { name: "ΓΚΡΊΦΙΝΤΟΡ! 🦁", desc: "Είσαι τολμηρός και γενναίος! Ρισκάρεις και εμπνέεις την ομάδα." },
            ravenclaw: { name: "ΡΈΙΒΕΝΚΛΟΟΥ! 🦅", desc: "Είσαι καινοτόμος και έξυπνος! Ερευνάς και δημιουργείς λύσεις." },
            hufflepuff: { name: "ΧΆΦΛΠΑΦ! 🦡", desc: "Είσαι αφοσιωμένος στην ομαδικότητα! Υποστηρίζεις τους άλλους." },
            slytherin: { name: "ΣΛΊΘΕΡΙΝ! 🐍", desc: "Είσαι στρατηγικός και ανταγωνιστικός! Βελτιστοποιείς την απόδοση." }
        },
        questions: [
            {
                q: "Το ρομπότ απέτυχε σε αποστολή. Τι κάνεις;",
                a: [
                    { text: "Δοκιμάζω κάτι τολμηρό!", house: "gryffindor" },
                    { text: "Ερευνώ για τη βέλτιστη λύση", house: "ravenclaw" },
                    { text: "Δουλεύουμε μαζί ως ομάδα", house: "hufflepuff" },
                    { text: "Εστιάζω σε αποστολές με περισσότερους πόντους", house: "slytherin" }
                ]
            },
            {
                q: "Τι σου αρέσει περισσότερο στο FLL;",
                a: [
                    { text: "Η συγκίνηση της ημέρας διαγωνισμού!", house: "gryffindor" },
                    { text: "Η κατασκευή καινοτόμων σχεδίων", house: "ravenclaw" },
                    { text: "Η συνεργασία με τους συμπαίκτες", house: "hufflepuff" },
                    { text: "Η νίκη και οι υψηλοί πόντοι", house: "slytherin" }
                ]
            },
            {
                q: "Απομένουν 2 λεπτά. Τι κάνεις;",
                a: [
                    { text: "Πάω για την επικίνδυνη αποστολή!", house: "gryffindor" },
                    { text: "Εκτελώ την πιο αποδοτική σειρά", house: "ravenclaw" },
                    { text: "Ενθαρρύνω τον συμπαίκτη", house: "hufflepuff" },
                    { text: "Υπολογίζω ποια αποστολή δίνει περισσότερα", house: "slytherin" }
                ]
            },
            {
                q: "Άλλη ομάδα χρειάζεται βοήθεια. Βοηθάς;",
                a: [
                    { text: "Βοηθάω αμέσως!", house: "gryffindor" },
                    { text: "Μοιράζομαι τεχνικές γνώσεις", house: "ravenclaw" },
                    { text: "Φυσικά - αυτό είναι το FLL!", house: "hufflepuff" },
                    { text: "Γρήγορη συμβουλή και μετά η δική μας προετοιμασία", house: "slytherin" }
                ]
            },
            {
                q: "Τι κάνει μια σπουδαία ομάδα FLL;",
                a: [
                    { text: "Θάρρος να δοκιμάσεις νέα πράγματα", house: "gryffindor" },
                    { text: "Δημιουργικές και έξυπνες ιδέες", house: "ravenclaw" },
                    { text: "Ομαδικότητα και φιλία", house: "hufflepuff" },
                    { text: "Στρατηγική και νικηφόρα νοοτροπία", house: "slytherin" }
                ]
            }
        ]
    },
    sr: {
        subtitle: "Откријте своју кућу у Хогвортсу кроз FLL!",
        sortedInto: "Распоређени сте у...",
        restart: "Поново",
        changeLanguage: "Промени Језик",
        questionOf: "Питање {current} од {total}",
        houses: {
            gryffindor: { name: "ГРИФИНДОР! 🦁", desc: "Храбри сте и смели! Ризикујете и инспиришете тим." },
            ravenclaw: { name: "РЕЈВЕНКЛО! 🦅", desc: "Иновативни сте и паметни! Волите истраживање и решења." },
            hufflepuff: { name: "ХАФЛПАФ! 🦡", desc: "Посвећени сте тимском раду! Подржавате друге." },
            slytherin: { name: "СЛИТЕРИН! 🐍", desc: "Стратешки сте и такмичарски! Оптимизујете перформансе." }
        },
        questions: [
            {
                q: "Робот је неуспео мисију. Шта радите?",
                a: [
                    { text: "Пробајте нешто смело!", house: "gryffindor" },
                    { text: "Истражите и нађите решење", house: "ravenclaw" },
                    { text: "Радите заједно као тим", house: "hufflepuff" },
                    { text: "Фокусирајте се на мисије са више поена", house: "slytherin" }
                ]
            },
            {
                q: "Шта највише волите у FLL?",
                a: [
                    { text: "Узбуђење дана такмичења!", house: "gryffindor" },
                    { text: "Прављење иновативних дизајна", house: "ravenclaw" },
                    { text: "Рад са тимом", house: "hufflepuff" },
                    { text: "Победа и освајање поена", house: "slytherin" }
                ]
            },
            {
                q: "Остало је 2 минута. Шта радите?",
                a: [
                    { text: "Идите на ризичну мисију!", house: "gryffindor" },
                    { text: "Извршите најефикаснији редослед", house: "ravenclaw" },
                    { text: "Бодрите саиграча", house: "hufflepuff" },
                    { text: "Израчунајте која мисија даје највише", house: "slytherin" }
                ]
            },
            {
                q: "Други тим треба помоћ. Помажете?",
                a: [
                    { text: "Помозите одмах!", house: "gryffindor" },
                    { text: "Поделите техничко знање", house: "ravenclaw" },
                    { text: "Наравно - то је FLL!", house: "hufflepuff" },
                    { text: "Брз савет па наша припрема", house: "slytherin" }
                ]
            },
            {
                q: "Шта чини одличан FLL тим?",
                a: [
                    { text: "Храброст да пробате ново", house: "gryffindor" },
                    { text: "Креативне и паметне идеје", house: "ravenclaw" },
                    { text: "Тимски рад и пријатељство", house: "hufflepuff" },
                    { text: "Стратегија и победнички дух", house: "slytherin" }
                ]
            }
        ]
    },
    hu: {
        subtitle: "Fedezd fel a Roxforti házadat az FLL-en keresztül!",
        sortedInto: "Beosztottak a...",
        restart: "Újra",
        changeLanguage: "Nyelv Váltás",
        questionOf: "Kérdés {current} / {total}",
        houses: {
            gryffindor: { name: "GRIFFENDÉL! 🦁", desc: "Bátor és merész vagy! Kockáztatsz és inspirálod a csapatot." },
            ravenclaw: { name: "HOLLÓHÁT! 🦅", desc: "Innovatív és okos vagy! Szeretsz kutatni és megoldásokat alkotni." },
            hufflepuff: { name: "HUGRABUG! 🦡", desc: "Elkötelezett vagy a csapatmunka mellett! Támogatod a többieket." },
            slytherin: { name: "MARDEKÁR! 🐍", desc: "Stratégiai és versenyző vagy! Optimalizálsz a maximumért." }
        },
        questions: [
            {
                q: "A robotod elbukott egy küldetést. Mit teszel?",
                a: [
                    { text: "Próbálj valami merészet!", house: "gryffindor" },
                    { text: "Kutass és találd meg a megoldást", house: "ravenclaw" },
                    { text: "Dolgozzatok együtt csapatként", house: "hufflepuff" },
                    { text: "Koncentrálj a több pontos küldetésekre", house: "slytherin" }
                ]
            },
            {
                q: "Mit szeretsz legjobban az FLL-ben?",
                a: [
                    { text: "A verseny napjának izgalma!", house: "gryffindor" },
                    { text: "Innovatív robot tervek építése", house: "ravenclaw" },
                    { text: "Csapattársakkal dolgozni", house: "hufflepuff" },
                    { text: "Nyerni és pontokat szerezni", house: "slytherin" }
                ]
            },
            {
                q: "2 perc van hátra. Mit teszel?",
                a: [
                    { text: "Menj a kockázatos küldetésre!", house: "gryffindor" },
                    { text: "Hajtsd végre a leghatékonyabb sorrendet", house: "ravenclaw" },
                    { text: "Biztasd a csapattársad", house: "hufflepuff" },
                    { text: "Számold ki melyik küldetés ad többet", house: "slytherin" }
                ]
            },
            {
                q: "Egy másik csapatnak segítség kell. Segítesz?",
                a: [
                    { text: "Azonnal segíts!", house: "gryffindor" },
                    { text: "Oszd meg a technikai tudást", house: "ravenclaw" },
                    { text: "Persze - ez az FLL lényege!", house: "hufflepuff" },
                    { text: "Gyors tanács aztán a mi készülésünk", house: "slytherin" }
                ]
            },
            {
                q: "Mi tesz egy FLL csapatot nagyszerűvé?",
                a: [
                    { text: "Bátorság új dolgokat kipróbálni", house: "gryffindor" },
                    { text: "Kreatív és okos ötletek", house: "ravenclaw" },
                    { text: "Csapatmunka és barátság", house: "hufflepuff" },
                    { text: "Stratégia és győztes mentalitás", house: "slytherin" }
                ]
            }
        ]
    },
    sk: {
        subtitle: "Objavte svoj rokfortský dom cez FLL!",
        sortedInto: "Boli ste zaradení do...",
        restart: "Znova",
        changeLanguage: "Zmeniť Jazyk",
        questionOf: "Otázka {current} z {total}",
        houses: {
            gryffindor: { name: "CHRABROMIL! 🦁", desc: "Ste odvážni a smelí! Riskujete a inšpirujete tím." },
            ravenclaw: { name: "BYSTROHLAV! 🦅", desc: "Ste inovatívni a múdri! Radi skúmate a tvoríte riešenia." },
            hufflepuff: { name: "BIFĽOMOR! 🦡", desc: "Ste oddaní tímovej práci! Podporujete ostatných." },
            slytherin: { name: "SLIZOLIN! 🐍", desc: "Ste strategickí a súťaživí! Optimalizujete výkon." }
        },
        questions: [
            {
                q: "Robot zlyhal v misii. Čo robíte?",
                a: [
                    { text: "Skúste niečo odvážne!", house: "gryffindor" },
                    { text: "Preskúmajte a nájdite riešenie", house: "ravenclaw" },
                    { text: "Pracujte spoločne ako tím", house: "hufflepuff" },
                    { text: "Sústreďte sa na misie s viac bodmi", house: "slytherin" }
                ]
            },
            {
                q: "Čo máte na FLL najradšej?",
                a: [
                    { text: "Vzrušenie dňa súťaže!", house: "gryffindor" },
                    { text: "Tvorba inovatívnych návrhov", house: "ravenclaw" },
                    { text: "Práca s tímom", house: "hufflepuff" },
                    { text: "Víťazstvo a získavanie bodov", house: "slytherin" }
                ]
            },
            {
                q: "Zostávajú 2 minúty. Čo robíte?",
                a: [
                    { text: "Choďte na riskantnú misiu!", house: "gryffindor" },
                    { text: "Vykonajte najefektívnejšiu sekvenciu", house: "ravenclaw" },
                    { text: "Povzbuďte spoluhráča", house: "hufflepuff" },
                    { text: "Vypočítajte ktorá misia dá najviac", house: "slytherin" }
                ]
            },
            {
                q: "Iný tím potrebuje pomoc. Pomôžete?",
                a: [
                    { text: "Pomôžte hneď!", house: "gryffindor" },
                    { text: "Zdieľajte technické znalosti", house: "ravenclaw" },
                    { text: "Samozrejme - to je FLL!", house: "hufflepuff" },
                    { text: "Rýchla rada potom naša príprava", house: "slytherin" }
                ]
            },
            {
                q: "Čo robí skvelý FLL tím?",
                a: [
                    { text: "Odvaha skúšať nové veci", house: "gryffindor" },
                    { text: "Kreatívne a múdre nápady", house: "ravenclaw" },
                    { text: "Tímová práca a priateľstvo", house: "hufflepuff" },
                    { text: "Stratégia a víťazná mentalita", house: "slytherin" }
                ]
            }
        ]
    },
    sl: {
        subtitle: "Odkrijte svojo bradavičarsko hišo skozi FLL!",
        sortedInto: "Razvrščeni ste v...",
        restart: "Ponovno",
        changeLanguage: "Spremeni Jezik",
        questionOf: "Vprašanje {current} od {total}",
        houses: {
            gryffindor: { name: "GRYFFINDOR! 🦁", desc: "Ste pogumni in drzni! Tvegate in navdihujete ekipo." },
            ravenclaw: { name: "RAVENCLAW! 🦅", desc: "Ste inovativni in pametni! Radi raziskujete in ustvarjate rešitve." },
            hufflepuff: { name: "HUFFLEPUFF! 🦡", desc: "Predani ste ekipnemu delu! Podpirate druge." },
            slytherin: { name: "SLYTHERIN! 🐍", desc: "Ste strateški in tekmovalni! Optimizirate za najboljše rezultate." }
        },
        questions: [
            {
                q: "Robot je spodletel pri misiji. Kaj storite?",
                a: [
                    { text: "Poskusite nekaj drznega!", house: "gryffindor" },
                    { text: "Raziskujte in poiščite rešitev", house: "ravenclaw" },
                    { text: "Delajte skupaj kot ekipa", house: "hufflepuff" },
                    { text: "Osredotočite se na misije z več točkami", house: "slytherin" }
                ]
            },
            {
                q: "Kaj vam je pri FLL najbolj všeč?",
                a: [
                    { text: "Vznemirjenje tekmovalnega dne!", house: "gryffindor" },
                    { text: "Gradnja inovativnih dizajnov", house: "ravenclaw" },
                    { text: "Delo s soigralci", house: "hufflepuff" },
                    { text: "Zmaga in zbiranje točk", house: "slytherin" }
                ]
            },
            {
                q: "Ostajata 2 minuti. Kaj storite?",
                a: [
                    { text: "Pojdite na tvegano misijo!", house: "gryffindor" },
                    { text: "Izvedite najučinkovitejše zaporedje", house: "ravenclaw" },
                    { text: "Spodbujajte soigralca", house: "hufflepuff" },
                    { text: "Izračunajte katera misija da največ", house: "slytherin" }
                ]
            },
            {
                q: "Druga ekipa potrebuje pomoč. Pomagate?",
                a: [
                    { text: "Takoj pomagajte!", house: "gryffindor" },
                    { text: "Delite tehnično znanje", house: "ravenclaw" },
                    { text: "Seveda - to je FLL!", house: "hufflepuff" },
                    { text: "Hiter nasvet potem naša priprava", house: "slytherin" }
                ]
            },
            {
                q: "Kaj naredi odlično FLL ekipo?",
                a: [
                    { text: "Pogum poskusiti nove stvari", house: "gryffindor" },
                    { text: "Kreativne in pametne ideje", house: "ravenclaw" },
                    { text: "Ekipno delo in prijateljstvo", house: "hufflepuff" },
                    { text: "Strategija in zmagovalna miselnost", house: "slytherin" }
                ]
            }
        ]
    },
    et: {
        subtitle: "Avasta oma Sigatüüka maja läbi FLL!",
        sortedInto: "Sind määrati...",
        restart: "Uuesti",
        changeLanguage: "Muuda Keelt",
        questionOf: "Küsimus {current} / {total}",
        houses: {
            gryffindor: { name: "GRYFFINDOR! 🦁", desc: "Oled julge ja vapper! Võtad riske ja inspireerid meeskonda." },
            ravenclaw: { name: "RAVENCLAW! 🦅", desc: "Oled uuenduslik ja tark! Armastad uurida ja lahendusi luua." },
            hufflepuff: { name: "HUFFLEPUFF! 🦡", desc: "Oled pühendunud meeskonnatööle! Toetad teisi." },
            slytherin: { name: "SLYTHERIN! 🐍", desc: "Oled strateegiline ja võistlushimuline! Optimeerid tulemusi." }
        },
        questions: [
            {
                q: "Robot ebaõnnestus missioonil. Mida teed?",
                a: [
                    { text: "Proovi midagi julget!", house: "gryffindor" },
                    { text: "Uuri ja leia lahendus", house: "ravenclaw" },
                    { text: "Töötage koos meeskonnana", house: "hufflepuff" },
                    { text: "Keskendu rohkemate punktide missioonidele", house: "slytherin" }
                ]
            },
            {
                q: "Mis sulle FLL juures kõige rohkem meeldib?",
                a: [
                    { text: "Võistluspäeva põnevus!", house: "gryffindor" },
                    { text: "Uuenduslike disainide ehitamine", house: "ravenclaw" },
                    { text: "Meeskonnakaaslastega töötamine", house: "hufflepuff" },
                    { text: "Võitmine ja punktide kogumine", house: "slytherin" }
                ]
            },
            {
                q: "2 minutit on jäänud. Mida teed?",
                a: [
                    { text: "Mine riskantse missiooni peale!", house: "gryffindor" },
                    { text: "Täida kõige tõhusam järjestus", house: "ravenclaw" },
                    { text: "Julgusta meeskonnakaaslast", house: "hufflepuff" },
                    { text: "Arvuta milline missioon annab enim", house: "slytherin" }
                ]
            },
            {
                q: "Teine meeskond vajab abi. Kas aitad?",
                a: [
                    { text: "Aita kohe!", house: "gryffindor" },
                    { text: "Jaga tehnilisi teadmisi", house: "ravenclaw" },
                    { text: "Muidugi - see on FLL!", house: "hufflepuff" },
                    { text: "Kiire nõuanne siis meie ettevalmistus", house: "slytherin" }
                ]
            },
            {
                q: "Mis teeb suurepärase FLL meeskonna?",
                a: [
                    { text: "Julgus proovida uusi asju", house: "gryffindor" },
                    { text: "Loomingulised ja nutikad ideed", house: "ravenclaw" },
                    { text: "Meeskonnatöö ja sõprus", house: "hufflepuff" },
                    { text: "Strateegia ja võidu mõtteviis", house: "slytherin" }
                ]
            }
        ]
    },
    kk: {
        subtitle: "FLL арқылы Хогвартс үйіңізді табыңыз!",
        sortedInto: "Сіз бөлінгенсіз...",
        restart: "Қайта бастау",
        changeLanguage: "Тілді өзгерту",
        questionOf: "Сұрақ {current} / {total}",
        houses: {
            gryffindor: { name: "ГРИФФИНДОР! 🦁", desc: "Сіз батыл және ержүрексіз! Тәуекел етіп, команданы шабыттандырасыз." },
            ravenclaw: { name: "КОГТЕВРАН! 🦅", desc: "Сіз инновациялық және ақылдысыз! Зерттеуді жақсы көресіз." },
            hufflepuff: { name: "ПУФФЕНДУЙ! 🦡", desc: "Сіз командалық жұмысқа берілгенсіз! Басқаларды қолдайсыз." },
            slytherin: { name: "СЛИЗЕРИН! 🐍", desc: "Сіз стратегиялық және бәсекеге қабілеттісіз!" }
        },
        questions: [
            {
                q: "Робот миссияда сәтсіз болды. Не істейсіз?",
                a: [
                    { text: "Батыл нәрсені байқап көріңіз!", house: "gryffindor" },
                    { text: "Зерттеп, шешім табыңыз", house: "ravenclaw" },
                    { text: "Команда болып бірге жұмыс істеңіз", house: "hufflepuff" },
                    { text: "Көп ұпай беретін миссияларға назар аударыңыз", house: "slytherin" }
                ]
            },
            {
                q: "FLL-де нені жақсы көресіз?",
                a: [
                    { text: "Жарыс күнінің қызығы!", house: "gryffindor" },
                    { text: "Инновациялық дизайндар құру", house: "ravenclaw" },
                    { text: "Командамен жұмыс істеу", house: "hufflepuff" },
                    { text: "Жеңу және ұпай жинау", house: "slytherin" }
                ]
            },
            {
                q: "2 минут қалды. Не істейсіз?",
                a: [
                    { text: "Қауіпті миссияға барыңыз!", house: "gryffindor" },
                    { text: "Ең тиімді ретті орындаңыз", house: "ravenclaw" },
                    { text: "Команда мүшесін қолдаңыз", house: "hufflepuff" },
                    { text: "Қай миссия көп беретінін есептеңіз", house: "slytherin" }
                ]
            },
            {
                q: "Басқа командаға көмек керек. Көмектесесіз бе?",
                a: [
                    { text: "Бірден көмектесіңіз!", house: "gryffindor" },
                    { text: "Техникалық білімді бөлісіңіз", house: "ravenclaw" },
                    { text: "Әрине - бұл FLL!", house: "hufflepuff" },
                    { text: "Жылдам кеңес содан кейін біздің дайындық", house: "slytherin" }
                ]
            },
            {
                q: "Тамаша FLL командасын не жасайды?",
                a: [
                    { text: "Жаңа нәрселерді байқап көру батылдығы", house: "gryffindor" },
                    { text: "Шығармашыл және ақылды идеялар", house: "ravenclaw" },
                    { text: "Командалық жұмыс және достық", house: "hufflepuff" },
                    { text: "Стратегия және жеңу ойлауы", house: "slytherin" }
                ]
            }
        ]
    },
    sw: {
        subtitle: "Gundua nyumba yako ya Hogwarts kupitia FLL!",
        sortedInto: "Umewekwa katika...",
        restart: "Rudia Jaribio",
        changeLanguage: "Badilisha Lugha",
        questionOf: "Swali {current} kati ya {total}",
        houses: {
            gryffindor: { name: "GRYFFINDOR! 🦁", desc: "Wewe ni jasiri na shujaa! Unachukua hatari na kuhamasisha timu." },
            ravenclaw: { name: "RAVENCLAW! 🦅", desc: "Wewe ni mbunifu na mwerevu! Unapenda kutafiti na kuunda suluhisho." },
            hufflepuff: { name: "HUFFLEPUFF! 🦡", desc: "Umejitolea kwa kazi ya timu! Unasaidia wengine na kuishi maadili." },
            slytherin: { name: "SLYTHERIN! 🐍", desc: "Wewe ni mkakati na mshindani! Unaboresha kwa utendaji bora." }
        },
        questions: [
            {
                q: "Roboti imeshindwa misheni. Unafanya nini?",
                a: [
                    { text: "Jaribu kitu cha ujasiri!", house: "gryffindor" },
                    { text: "Tafiti na pata suluhisho bora", house: "ravenclaw" },
                    { text: "Fanya kazi pamoja kama timu", house: "hufflepuff" },
                    { text: "Zingatia misheni zenye pointi zaidi", house: "slytherin" }
                ]
            },
            {
                q: "Unapenda nini zaidi kuhusu FLL?",
                a: [
                    { text: "Msisimko wa siku ya mashindano!", house: "gryffindor" },
                    { text: "Kujenga miundo ya ubunifu", house: "ravenclaw" },
                    { text: "Kufanya kazi na wenzangu", house: "hufflepuff" },
                    { text: "Kushinda na kupata pointi nyingi", house: "slytherin" }
                ]
            },
            {
                q: "Dakika 2 zimebaki. Unafanya nini?",
                a: [
                    { text: "Nenda kwa misheni ya hatari!", house: "gryffindor" },
                    { text: "Tekeleza mlolongo bora zaidi", house: "ravenclaw" },
                    { text: "Tia moyo mwenzako", house: "hufflepuff" },
                    { text: "Hesabu misheni ipi inatoa zaidi", house: "slytherin" }
                ]
            },
            {
                q: "Timu nyingine inahitaji msaada. Unasaidia?",
                a: [
                    { text: "Saidia mara moja!", house: "gryffindor" },
                    { text: "Shiriki ujuzi wa kiufundi", house: "ravenclaw" },
                    { text: "Bila shaka - hiyo ndiyo FLL!", house: "hufflepuff" },
                    { text: "Ushauri wa haraka kisha maandalizi yetu", house: "slytherin" }
                ]
            },
            {
                q: "Nini hufanya timu kubwa ya FLL?",
                a: [
                    { text: "Ujasiri wa kujaribu mambo mapya", house: "gryffindor" },
                    { text: "Mawazo ya ubunifu na akili", house: "ravenclaw" },
                    { text: "Kazi ya timu na urafiki", house: "hufflepuff" },
                    { text: "Mkakati na nia ya kushinda", house: "slytherin" }
                ]
            }
        ]
    }
};

let currentLanguage = null;
let currentQuestion = 0;
let houseScores = { gryffindor: 0, ravenclaw: 0, hufflepuff: 0, slytherin: 0 };

// Build language selection screen
function buildLanguageMenu() {
    const grid = document.getElementById('language-grid');
    grid.innerHTML = '';
    
    languages.forEach(lang => {
        const btn = document.createElement('button');
        btn.className = 'language-btn';
        btn.innerHTML = `<span class="flag">${lang.flag}</span> ${lang.name}`;
        btn.onclick = () => selectLanguage(lang.code);
        grid.appendChild(btn);
    });
}

function selectLanguage(code) {
    currentLanguage = code;
    document.getElementById('language-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('subtitle').textContent = translations[code].subtitle;
    loadQuestion();
}

function loadQuestion() {
    const t = translations[currentLanguage];
    const q = t.questions[currentQuestion];
    
    document.getElementById('question-text').textContent = q.q;
    document.getElementById('progress-text').textContent = 
        t.questionOf.replace('{current}', currentQuestion + 1).replace('{total}', t.questions.length);
    
    const container = document.getElementById('answers-container');
    container.innerHTML = '';
    
    // Shuffle answers
    const shuffled = [...q.a].sort(() => Math.random() - 0.5);
    
    shuffled.forEach(answer => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer.text;
        btn.onclick = () => selectAnswer(answer.house);
        container.appendChild(btn);
    });
}

function selectAnswer(house) {
    houseScores[house]++;
    currentQuestion++;
    
    if (currentQuestion < translations[currentLanguage].questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const t = translations[currentLanguage];
    
    // Find winning house
    let maxScore = 0;
    let winner = '';
    for (const house in houseScores) {
        if (houseScores[house] > maxScore) {
            maxScore = houseScores[house];
            winner = house;
        }
    }
    
    // Handle ties
    const tied = Object.keys(houseScores).filter(h => houseScores[h] === maxScore);
    if (tied.length > 1) winner = tied[Math.floor(Math.random() * tied.length)];
    
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    
    document.getElementById('sorted-into-text').textContent = t.sortedInto;
    
    const resultDiv = document.getElementById('house-result');
    resultDiv.textContent = t.houses[winner].name;
    resultDiv.className = winner;
    
    document.getElementById('house-description').textContent = t.houses[winner].desc;
    document.getElementById('restart-btn').textContent = t.restart;
    document.getElementById('change-language-btn').textContent = t.changeLanguage;
}

function restartQuiz() {
    currentQuestion = 0;
    houseScores = { gryffindor: 0, ravenclaw: 0, hufflepuff: 0, slytherin: 0 };
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    loadQuestion();
}

function changeLanguage() {
    currentQuestion = 0;
    houseScores = { gryffindor: 0, ravenclaw: 0, hufflepuff: 0, slytherin: 0 };
    currentLanguage = null;
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('language-container').style.display = 'block';
    document.getElementById('subtitle').textContent = "Choose your language / Elige tu idioma";
}

// Initialize
window.onload = buildLanguageMenu;
