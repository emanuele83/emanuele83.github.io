/**
 * Emanuele Sabbadini - Portfolio & CV Site
 * Internationalization (i18n) Data: English & Italian
 */
const translations = {
  en: {
    nav: {
      about: "About",
      convergence: "Architecture",
      experience: "Experience",
      projects: "Case Studies",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      downloadCv: "Download CV"
    },
    hero: {
      badge: "Available for Technical Leadership & Strategic Consulting",
      titlePrefix: "Bridging Mission-Critical",
      titleHighlight: "Industrial OT",
      titleMid: "& Scalable",
      titleHighlight2: "Enterprise IT",
      subtitle: "Solutions Architect & Technical Lead with 20+ years of end-to-end experience connecting real-time industrial shop-floor telemetry (MES, SCADA, Level 2) with resilient modern enterprise software architectures.",
      ctaPrimary: "Explore Experience & Projects",
      ctaSecondary: "Get in Touch",
      location: "Udine, Italy • Global On-Site Commissioning",
      statYears: "20+",
      statYearsLabel: "Years of Engineering Experience",
      statLevel2: "Mission-Critical",
      statLevel2Label: "Level 2 Automation & MES Systems",
      statPipeline: "100%",
      statPipelineLabel: "Shop-Floor to Cloud Pipeline Mastery",
      statLeadership: "Global Delivery",
      statLeadershipLabel: "Autonomous On-Site Commissioning"
    },
    summary: {
      sectionTitle: "Executive Summary",
      sectionSubtitle: "Two decades of hands-on technical leadership at the intersection of heavy industry and enterprise software.",
      body1: "Software Engineer & OT Specialist with 20+ years of end-to-end experience bridging modern IT architectures (web, desktop, cloud) and industrial automation (SCADA, MES, process control).",
      body2: "Proven track record delivering autonomous on-site commissioning for mission-critical operations, architecting robust enterprise data pipelines, and translating complex client requirements into scalable industrial solutions.",
      body3: "Adept at cross-functional leadership, stakeholder management, and continuous technological modernization. Seeking to drive digital transformation and assume technical leadership responsibilities in high-impact industrial or enterprise environments.",
      pillars: [
        {
          title: "IT/OT Convergence",
          desc: "Unifying PLC edge telemetry, Kepware OPC, and Level 2 process control with enterprise MES, ERP (SAP), and distributed microservices."
        },
        {
          title: "Mission-Critical Resiliency",
          desc: "Architecting zero-downtime, multi-threaded event-sourcing engines for continuous steel casting and high-density financial distribution."
        },
        {
          title: "Legacy Modernization",
          desc: "Phased migrations from legacy codebases (Delphi, monolithic WinForms) to modern C#/.NET, Clean Architecture, and high-performance APIs."
        },
        {
          title: "Technical Team Leadership",
          desc: "Directing cross-functional internal engineers and external vendors, setting architectural standards, and driving autonomous global plant commissioning."
        }
      ]
    },
    convergence: {
      sectionTitle: "The IT/OT Architectural Stack",
      sectionSubtitle: "How Emanuele connects the raw industrial shop floor directly to enterprise business intelligence.",
      layers: [
        {
          badge: "Tier 4 • Enterprise & Cloud (IT)",
          title: "Enterprise Systems & Analytics",
          tech: "DELMIA Apriso MES • SAP ERP • SQL Server • InfluxDB • Web APIs • Reporting Dashboards",
          desc: "Business logic, production planning, ERP reconciliation, OEE analytics, and executive intelligence dashboards."
        },
        {
          badge: "Tier 3 • Core Architecture & Middleware",
          title: "Integration & Event Pipeline",
          tech: "Clean Architecture • Event Sourcing • Microservices • UNS / Message Brokers • .NET / C# • Python • Ruby",
          desc: "Resilient high-throughput pipelines, data normalization, schema modeling, state machines, and bidirectional synchronization."
        },
        {
          badge: "Tier 2 • Supervisory & Process Control",
          title: "Level 2 Automation & Diagnostics",
          tech: "Level 2 Continuous Casting • SCADA • Computer Vision Scrap Tracking • Multithreading • WPF/WCF",
          desc: "Real-time process optimization, automated metallurgical recommendations, edge classification, and dynamic operator consoles."
        },
        {
          badge: "Tier 1 • Industrial Shop-Floor (OT)",
          title: "Edge Telemetry & Hardware",
          tech: "Kepware OPC UA / DA • Industrial PLCs • Sensors • Shop-Floor Edge Gateways • Field Commissioning",
          desc: "Sub-second sensor ingestion, machine state acquisition, protocol translation, and autonomous plant floor deployment."
        }
      ]
    },
    experience: {
      sectionTitle: "Professional Experience",
      sectionSubtitle: "20+ years of high-concurrency software development, industrial automation, and systems architecture.",
      roles: [
        {
          period: "05/2024 – Present",
          title: "OT Specialist | MES & Industrial Integration",
          company: "Faber Industrie S.p.a.",
          location: "Udine, Italy",
          env: "Delmia Apriso MES, Kepware OPC, MS SQL Server, Jira, Confluence",
          highlights: [
            {
              bold: "Architecture & MES Modernization:",
              text: "Co-design technical continuous improvement for enterprise Delmia Apriso MES, standardizing data models across production lines and work centers to ensure high-fidelity shop-floor tracking."
            },
            {
              bold: "Shop-Floor to Enterprise Integration:",
              text: "Configure edge telemetry pipelines via Kepware OPC servers, bridging PLC hardware directly with the MES to capture real-time production, state, and traceability data."
            },
            {
              bold: "Process Optimization & OEE Accuracy:",
              text: "Collaborate with Value Stream Leaders to eliminate manufacturing bottlenecks, aligning system business logic with plant operations to improve Overall Equipment Effectiveness (OEE) metrics."
            },
            {
              bold: "Vendor & Lifecycle Management:",
              text: "Author technical specifications and functional blueprints for system expansions, managing external software vendors through delivery, integration testing, and successful go-live phases."
            },
            {
              bold: "Operational Enablement & Intelligence:",
              text: "Design SQL reporting dashboards for plant management and conduct technical onboarding to drive adoption across plant supervisors and operators."
            }
          ]
        },
        {
          period: "09/2015 – 05/2024",
          title: "Lead Software Engineer & Process Control Specialist",
          company: "SMS Group S.p.a.",
          location: "Udine, Italy",
          env: "C# (.NET Framework), WPF, WCF, WinForms, Delphi, Oracle, SQL Server, Git, Multithreading, Event Sourcing",
          highlights: [
            {
              bold: "Mission-Critical Level 2 Architecture:",
              text: "Architected and maintained Level 2 automation platforms for continuous casting and steelmaking, leveraging multi-threaded and event-sourcing patterns to process real-time PLC telemetry and deliver automated process optimization recommendations."
            },
            {
              bold: "Technical Team Leadership:",
              text: "Directed a cross-functional team of internal software engineers and external contractors in designing and delivering the core software suite for the casting area, managing code reviews, delivery sprints, and architectural alignment."
            },
            {
              bold: "Modernization & Refactoring:",
              text: "Co-architected the phased migration of legacy components from Delphi to modern C#/.NET, replacing backend logic and user interfaces to enhance system maintainability and operator throughput."
            },
            {
              bold: "Vision System Integration:",
              text: "Co-designed the integration of an intelligent scrap yard management system incorporating computer vision algorithms for real-time operational classification and material tracking."
            },
            {
              bold: "Autonomous Commissioning & Field Integration:",
              text: "Executed end-to-end on-site deployment, commissioning, and validation in global plant environments; engineered secure data interfaces connecting Level 2 systems to enterprise ERP/MES layers and mentored junior engineers on industrial protocol standards."
            }
          ]
        },
        {
          period: "08/2004 – 08/2015",
          title: "Full-Stack Software Engineer",
          company: "Procne S.r.l.",
          location: "Udine, Italy",
          env: "C#, .NET (WPF, WCF), Ruby on Rails, PHP, Node.js, SQL Server, PostgreSQL, AngularJS",
          highlights: [
            {
              bold: "Enterprise Financial & Healthcare Engine (2012–2015):",
              text: "Architected and deployed a calculation engine for public welfare institutions handling pension distributions, tax withholding, and healthcare refunds; built high-density WPF desktop interfaces, automated batch reporting, and managed on-site production deployments. (C#, .NET, WPF, WCF, SQL Server)"
            },
            {
              bold: "Real-Time Remote Support Platform (2014):",
              text: "Engineered a full-stack web application for remote industrial/commercial diagnostics, implementing real-time messaging, ticket lifecycle workflows, and automated image ingestion for field troubleshooting. (Ruby on Rails, AngularJS, PostgreSQL)"
            },
            {
              bold: "Graph Visualization Engine (2013):",
              text: "Designed and developed an interactive data exploration tool rendering entity relationships using dynamic SVG graph topologies and graph databases. (Node.js, D3.js, OrientDB, AngularJS)"
            },
            {
              bold: "B2B E-Commerce & Portal (2009–2012):",
              text: "Built scalable backend services for a distributed smart-home franchise network, integrating multi-supplier product catalogs, secure SOAP banking payments, and cross-domain authentication. (Ruby on Rails, PHP, PostgreSQL)"
            }
          ]
        }
      ]
    },
    projects: {
      sectionTitle: "Architectural Case Studies",
      sectionSubtitle: "Representative mission-critical systems and software architectures designed and delivered.",
      items: [
        {
          tag: "Industrial Automation",
          title: "Mission-Critical Level 2 Casting Automation",
          organization: "SMS Group S.p.a.",
          desc: "Engineered a multi-threaded process control platform for continuous steel casting. Ingests high-frequency PLC telemetry, calculates real-time metallurgical cooling parameters, and delivers automated recommendations directly to plant operators with sub-second responsiveness.",
          tech: ["C# / .NET", "Multithreading", "Event Sourcing", "Oracle", "Level 2 Automation", "WPF"]
        },
        {
          tag: "IT/OT Convergence",
          title: "Shop-Floor to Enterprise Telemetry Pipeline",
          organization: "Faber Industrie S.p.a.",
          desc: "Connected industrial shop-floor manufacturing cells directly to Delmia Apriso MES via Kepware OPC servers. Standardized heterogeneous PLC data models into a unified schema, enabling real-time work-in-progress tracking and millisecond accuracy for Overall Equipment Effectiveness (OEE).",
          tech: ["DELMIA Apriso MES", "Kepware OPC", "MS SQL Server", "PLC Integration", "OEE Optimization"]
        },
        {
          tag: "AI & Computer Vision",
          title: "Intelligent Scrap Yard Classification & Tracking",
          organization: "SMS Group S.p.a.",
          desc: "Architected the software integration layer for a computer vision scrap yard management solution. Evaluates incoming raw scrap metal feeds, performs operational quality grading, and directs crane automation logistics while maintaining data fidelity with central manufacturing records.",
          tech: ["Computer Vision", "C# / .NET", "Process Control", "SQL Server", "System Integration"]
        },
        {
          tag: "Enterprise FinTech & Public Sector",
          title: "High-Density Welfare & Pension Calculation Engine",
          organization: "Procne S.r.l.",
          desc: "Designed and implemented a calculation and disbursement engine for public welfare organizations. Handled multi-tiered tax withholdings, complex healthcare benefit formulas, automated batch schedules, and high-density operator desktop consoles.",
          tech: ["C#", ".NET WPF/WCF", "SQL Server", "Batch Processing", "Enterprise Architecture"]
        },
        {
          tag: "Data Visualization & Analytics",
          title: "Dynamic SVG Topology & Entity Graph Visualizer",
          organization: "Procne S.r.l.",
          desc: "Developed an interactive web-based relational visualization engine rendering complex entity-relationship graphs. Allowed real-time exploration, clustered node analysis, and sub-graph isolation powered by dynamic SVG rendering and graph database persistence.",
          tech: ["Node.js", "D3.js", "SVG Topology", "OrientDB", "AngularJS"]
        },
        {
          tag: "Legacy Modernization",
          title: "Phased Delphi to Modern .NET Architecture Migration",
          organization: "SMS Group S.p.a.",
          desc: "Strategically decomposed a monolithic legacy Delphi Level 2 process control suite into modular C#/.NET services. Ensured continuous operational uptime during phased rollout without interrupting active 24/7 steelmaking operations.",
          tech: ["Architecture Migration", "Delphi", "C# / .NET", "Clean Architecture", "WCF / Microservices"]
        }
      ]
    },
    skills: {
      sectionTitle: "Technical Skills Matrix",
      sectionSubtitle: "Comprehensive technical proficiency developed over two decades of production deployments.",
      categories: [
        {
          id: "arch",
          name: "Architecture & Systems Design",
          items: ["Clean Architecture", "Event-Driven Architectures", "Microservices", "UNS / Message Brokers", "Real-time Systems", "Schema Design", "System Integration", "Scalable Design Patterns", "Multithreading & Concurrency"]
        },
        {
          id: "ot",
          name: "Industrial Automation & OT",
          items: ["DELMIA Apriso MES", "Kepware OPC (UA/DA)", "SCADA & Level 2 Automation", "Shop-Floor Data Pipelines", "OEE Calculation & Tracking", "Autonomous Field Commissioning", "PLC Hardware Bridging", "Computer Vision Integration"]
        },
        {
          id: "lang",
          name: "Programming Languages & Stacks",
          items: ["C# (.NET / Core / Framework)", "Ruby (Ruby on Rails)", "Python", "JavaScript & TypeScript", "PHP", "Delphi", "HTML5 & CSS3", "Angular, React, Svelte"]
        },
        {
          id: "data",
          name: "Databases, Tools & Platforms",
          items: ["PostgreSQL", "MS SQL Server", "Oracle", "InfluxDB (Time-series)", "MongoDB", "Redis", "Docker", "Grafana", "SAP Integration", "Git", "Jira & Confluence", "Windows & Unix/Linux"]
        }
      ]
    },
    education: {
      sectionTitle: "Education & Credentials",
      sectionSubtitle: "Foundational technical training in aeronautical systems and e-commerce technologies.",
      items: [
        {
          degree: "E-commerce Technician Certificate",
          institution: "ENAIP – Udine, Italy",
          year: "2004",
          desc: "Advanced coursework in web architectures, e-commerce transaction systems, relational databases, and enterprise networking."
        },
        {
          degree: "Aeronautical Technician Diploma",
          institution: 'I.T.I. "A. MALIGNANI" – Udine, Italy',
          year: "2002",
          desc: "Rigorous engineering education covering aerodynamics, avionics, precision telemetry, instrumentation, and control theory."
        }
      ],
      languages: {
        title: "Languages",
        items: [
          { name: "Italian", level: "Native / Mother tongue" },
          { name: "English", level: "Professional Working Proficiency (Technical documentation, international commissioning)" }
        ]
      }
    },
    contact: {
      sectionTitle: "Get in Touch",
      sectionSubtitle: "Open to discussions regarding Technical Leadership, Solutions Architecture, and IT/OT modernization.",
      cardTitle: "Let's collaborate on mission-critical solutions",
      cardText: "Whether you need to architect a new MES integration, modernize legacy process control software, or lead an engineering team through complex digital transformation, feel free to reach out directly.",
      emailLabel: "Direct Email",
      emailValue: "emanuele.sabbadini@gmail.com",
      linkedinLabel: "LinkedIn Profile",
      linkedinValue: "linkedin.com/in/emanuele-sabbadini",
      locationLabel: "Location & Mobility",
      locationValue: "Udine, Italy (Available for on-site commissioning & remote/hybrid leadership)",
      copyEmail: "Copy Email",
      emailCopied: "Copied to clipboard!",
      formName: "Your Name",
      formEmail: "Your Email",
      formSubject: "Subject / Topic",
      formMessage: "Message / Project Overview",
      formSubmit: "Send Message",
      formSubmitting: "Sending Message...",
      formSuccess: "✓ Message sent successfully! Thank you, Emanuele will respond to you shortly.",
      formError: "Notice: Direct web dispatch unavailable. Click below to open your email client or copy the message:",
      formOpenMailto: "Open Email Client",
      formCopyMsg: "Copy Message",
      formCopied: "Message copied to clipboard!",
      formNote: "Your message will be delivered directly to Emanuele.",
      downloadResumeBtn: "Download Official CV (PDF)"
    },
    footer: {
      copyright: "© 2026 Emanuele Sabbadini. Solutions Architect & Technical Lead.",
      privacy: "Autorizzo il trattamento dei miei dati personali ai sensi del D.Lgs. 196/2003 e del GDPR (Regolamento UE 2016/679).",
      domain: "emanuelesabbadini.com"
    }
  },
  it: {
    nav: {
      about: "Profilo",
      convergence: "Architettura",
      experience: "Esperienza",
      projects: "Casi Studio",
      skills: "Competenze",
      education: "Formazione",
      contact: "Contatti",
      downloadCv: "Scarica CV"
    },
    hero: {
      badge: "Disponibile per Ruoli di Technical Leadership & Consulenza Strategica",
      titlePrefix: "Unire l'Automazione",
      titleHighlight: "OT Industriale",
      titleMid: "con l'Ecosistema",
      titleHighlight2: "Enterprise IT",
      subtitle: "Solutions Architect & Technical Lead con 20+ anni di esperienza nell'integrazione di sistemi industriali real-time di fabbrica (MES, SCADA, Livello 2) con architetture software enterprise moderne, resilienti e scalabili.",
      ctaPrimary: "Esplora Esperienza & Progetti",
      ctaSecondary: "Contattami",
      location: "Udine, Italia • Commissioning Internazionale On-Site",
      statYears: "20+",
      statYearsLabel: "Anni di Esperienza Ingegneristica",
      statLevel2: "Mission-Critical",
      statLevel2Label: "Sistemi Livello 2 & MES Realizzati",
      statPipeline: "100%",
      statPipelineLabel: "Integrazione Completa Shop-Floor / Cloud",
      statLeadership: "Delivery Globale",
      statLeadershipLabel: "Commissioning Autonomo On-Site"
    },
    summary: {
      sectionTitle: "Profilo Professionale",
      sectionSubtitle: "Due decenni di leadership tecnica sul campo, all'incrocio tra industria pesante e ingegneria del software.",
      body1: "Software Engineer & Specialista OT con oltre 20 anni di esperienza end-to-end nel connettere moderne architetture IT (web, desktop, cloud) con l'automazione industriale (SCADA, MES, controllo di processo).",
      body2: "Comprovata esperienza nella conduzione autonoma di attività di commissioning on-site per operazioni mission-critical, nella progettazione di pipeline dati aziendali robuste e nella traduzione di requisiti complessi in soluzioni industriali scalabili.",
      body3: "Esperto in leadership cross-funzionale, gestione degli stakeholder e modernizzazione tecnologica continua. Orientato a guidare la trasformazione digitale e assumere ruoli di leadership tecnica in ambienti industriali o enterprise ad alto impatto.",
      pillars: [
        {
          title: "Convergenza IT/OT",
          desc: "Integrazione telemetria PLC, Kepware OPC e controllo di processo di Livello 2 con MES enterprise (Delmia Apriso), ERP (SAP) e microservizi."
        },
        {
          title: "Resilienza Mission-Critical",
          desc: "Progettazione di motori multi-thread ed event-sourcing ad altissima affidabilità per colata continua dell'acciaio e calcolo previdenziale ad alta densità."
        },
        {
          title: "Modernizzazione di Sistemi Legacy",
          desc: "Migrazioni graduali a caldo da codebase storici (Delphi, monolitici WinForms) verso C#/.NET moderno, Clean Architecture e API ad alte prestazioni."
        },
        {
          title: "Technical Leadership & Delivery",
          desc: "Guida di team cross-funzionali di ingegneri e fornitori esterni, definizione degli standard architetturali e collaudo autonomo in stabilimenti internazionali."
        }
      ]
    },
    convergence: {
      sectionTitle: "Lo Stack Architetturale IT/OT",
      sectionSubtitle: "Come Emanuele collega il piano macchina industriale direttamente alla business intelligence aziendale.",
      layers: [
        {
          badge: "Livello 4 • Enterprise & Cloud (IT)",
          title: "Sistemi Aziendali & Analytics",
          tech: "DELMIA Apriso MES • SAP ERP • SQL Server • InfluxDB • Web API • Cruscotti Direzionali",
          desc: "Logica di business, pianificazione della produzione, riconciliazione contabile ERP, metriche OEE e reportistica per il management."
        },
        {
          badge: "Livello 3 • Architettura Centrale & Middleware",
          title: "Pipeline Dati & Event Broker",
          tech: "Clean Architecture • Event Sourcing • Microservizi • UNS / Message Brokers • .NET / C# • Python • Ruby",
          desc: "Flussi dati ad alto throughput, normalizzazione dei modelli, macchine a stati, broker MQTT/Kafka e sincronizzazione bidirezionale."
        },
        {
          badge: "Livello 2 • Supervisione & Controllo di Processo",
          title: "Automazione Livello 2 & Diagnostica",
          tech: "Livello 2 Colata Continua • SCADA • Computer Vision Parco Rottami • Multithreading • WPF/WCF",
          desc: "Ottimizzazione di processo in tempo reale, raccomandazioni metallurgiche automatiche, classificazione ottica e interfacce operatore HMI ad alta reattività."
        },
        {
          badge: "Livello 1 • Piano Macchina Industriale (OT)",
          title: "Telemetria Edge & Hardware",
          tech: "Kepware OPC UA / DA • PLC Industriali • Sensori • Gateway Edge • Collaudo in Campo",
          desc: "Acquisizione dati sensori a frequenza millisecondica, lettura stati macchina, traduzione protocolli industriali e messa in servizio sul campo."
        }
      ]
    },
    experience: {
      sectionTitle: "Esperienza Lavorativa",
      sectionSubtitle: "Oltre 20 anni di sviluppo software ad alta concorrenza, automazione industriale e architetture scalabili.",
      roles: [
        {
          period: "05/2024 – Presente",
          title: "OT Specialist | MES & Industrial Integration",
          company: "Faber Industrie S.p.a.",
          location: "Udine, Italia",
          env: "Delmia Apriso MES, Kepware OPC, MS SQL Server, Jira, Confluence",
          highlights: [
            {
              bold: "Architettura & Modernizzazione MES:",
              text: "Co-progettazione del miglioramento continuo tecnico per il MES enterprise Delmia Apriso, standardizzando i modelli dati tra le linee di produzione e i centri di lavoro per garantire un tracciamento shop-floor ad alta fedeltà."
            },
            {
              bold: "Integrazione Shop-Floor verso Enterprise:",
              text: "Configurazione di pipeline di telemetria edge tramite server Kepware OPC, connettendo direttamente l'hardware PLC con il MES per catturare in tempo reale dati di produzione, stato macchina e tracciabilità."
            },
            {
              bold: "Ottimizzazione di Processo & Accuratezza OEE:",
              text: "Collaborazione con i Value Stream Leader per eliminare i colli di bottiglia produttivi, allineando la logica applicativa alle operazioni di stabilimento per massimizzare l'Overall Equipment Effectiveness (OEE)."
            },
            {
              bold: "Gestione Fornitori & Ciclo di Vita Software:",
              text: "Redazione di specifiche tecniche e blueprint funzionali per estensioni di sistema, gestendo i fornitori software esterni attraverso le fasi di rilascio, test di integrazione e go-live con successo."
            },
            {
              bold: "Abilitazione Operativa & Business Intelligence:",
              text: "Sviluppo di dashboard di reportistica SQL per la direzione di stabilimento e conduzione di sessioni di onboarding tecnico per favorire l'adozione da parte di supervisori e operatori."
            }
          ]
        },
        {
          period: "09/2015 – 05/2024",
          title: "Lead Software Engineer & Process Control Specialist",
          company: "SMS Group S.p.a.",
          location: "Udine, Italia",
          env: "C# (.NET Framework), WPF, WCF, WinForms, Delphi, Oracle, SQL Server, Git, Multithreading, Event Sourcing",
          highlights: [
            {
              bold: "Architettura Livello 2 Mission-Critical:",
              text: "Progettazione e manutenzione delle piattaforme di automazione di Livello 2 per colata continua e acciaieria, impiegando pattern multi-thread ed event-sourcing per elaborare la telemetria PLC in tempo reale e generare raccomandazioni automatiche di processo."
            },
            {
              bold: "Leadership Tecnica del Team:",
              text: "Direzione di un team cross-funzionale di ingegneri software interni e consulenti esterni nella progettazione e nel rilascio della suite software centrale per l'area colata, gestendo code review, sprint e allineamento architetturale."
            },
            {
              bold: "Modernizzazione & Refactoring:",
              text: "Co-progettazione della migrazione graduale dei componenti legacy da Delphi a moderno C#/.NET, rinnovando la logica di backend e le interfacce utente per elevare manutenibilità e produttività degli operatori."
            },
            {
              bold: "Integrazione Sistemi di Visione Artificiale:",
              text: "Co-progettazione dell'integrazione di un sistema intelligente per la gestione del parco rottami basato su algoritmi di computer vision per la classificazione operativa e il tracciamento materiali in tempo reale."
            },
            {
              bold: "Commissioning Autonomo & Integrazione in Campo:",
              text: "Esecuzione autonoma di deployment, commissioning e validazione on-site in stabilimenti industriali a livello globale; sviluppo di interfacce sicure tra sistemi Livello 2 e livelli ERP/MES e mentoring a ingegneri junior sugli standard industriali."
            }
          ]
        },
        {
          period: "08/2004 – 08/2015",
          title: "Full-Stack Software Engineer",
          company: "Procne S.r.l.",
          location: "Udine, Italia",
          env: "C#, .NET (WPF, WCF), Ruby on Rails, PHP, Node.js, SQL Server, PostgreSQL, AngularJS",
          highlights: [
            {
              bold: "Motore Finanziario & Previdenziale Enterprise (2012–2015):",
              text: "Progettazione e rilascio di un motore di calcolo per enti previdenziali per la gestione di erogazione pensioni, ritenute fiscali e rimborsi sanitari; sviluppo di interfacce desktop WPF ad alta densità, elaborazioni batch automatizzate e gestione dei deployment di produzione on-site. (C#, .NET, WPF, WCF, SQL Server)"
            },
            {
              bold: "Piattaforma di Supporto Remoto Real-Time (2014):",
              text: "Sviluppo di un'applicazione web full-stack per la diagnostica remota industriale/commerciale, con messaggistica istantanea, gestione del ciclo di vita dei ticket e acquisizione automatica di immagini per il troubleshooting in campo. (Ruby on Rails, AngularJS, PostgreSQL)"
            },
            {
              bold: "Motore di Visualizzazione Grafi (2013):",
              text: "Progettazione e sviluppo di uno strumento interattivo di esplorazione dati per il rendering di relazioni complesse tramite topologie dinamiche su grafi SVG e database orientati ai grafi. (Node.js, D3.js, OrientDB, AngularJS)"
            },
            {
              bold: "E-Commerce & Portale B2B (2009–2012):",
              text: "Realizzazione di servizi backend scalabili per una rete distribuita in franchising nel settore domotica, con integrazione di cataloghi multi-fornitore, pagamenti bancari SOAP sicuri e autenticazione cross-domain. (Ruby on Rails, PHP, PostgreSQL)"
            }
          ]
        }
      ]
    },
    projects: {
      sectionTitle: "Casi Studio Architetturali",
      sectionSubtitle: "Sistemi critici e architetture software realizzate per contesti industriali ed enterprise complessi.",
      items: [
        {
          tag: "Automazione Industriale",
          title: "Automazione Livello 2 per Colata Continua Mission-Critical",
          organization: "SMS Group S.p.a.",
          desc: "Piattaforma di controllo di processo multi-thread per colata continua dell'acciaio. Acquisizione ad alta frequenza della telemetria dai PLC, calcolo in tempo reale dei parametri metallurgici di raffreddamento e raccomandazioni operative agli operatori con latenza sub-secondaria.",
          tech: ["C# / .NET", "Multithreading", "Event Sourcing", "Oracle", "Automazione Livello 2", "WPF"]
        },
        {
          tag: "Convergenza IT/OT",
          title: "Pipeline Telemetrica Shop-Floor verso MES Enterprise",
          organization: "Faber Industrie S.p.a.",
          desc: "Integrazione diretta tra isole di produzione di fabbrica e Delmia Apriso MES tramite server Kepware OPC. Standardizzazione di modelli PLC eterogenei in uno schema unificato, con tracciamento avanzato del Work-In-Progress e calcolo OEE in tempo reale.",
          tech: ["DELMIA Apriso MES", "Kepware OPC", "MS SQL Server", "Integrazione PLC", "Ottimizzazione OEE"]
        },
        {
          tag: "AI & Computer Vision",
          title: "Classificazione & Tracciamento Intelligente Parco Rottami",
          organization: "SMS Group S.p.a.",
          desc: "Integrazione software per la gestione del parco rottami mediante algoritmi di visione artificiale. Valutazione qualitativa delle cariche di rottame in ingresso, supporto alla logistica automatizzata delle gru e allineamento con i record di produzione centrali.",
          tech: ["Computer Vision", "C# / .NET", "Controllo di Processo", "SQL Server", "System Integration"]
        },
        {
          tag: "FinTech Enterprise & Settore Pubblico",
          title: "Motore di Calcolo Previdenziale & Sanitario ad Alta Densità",
          organization: "Procne S.r.l.",
          desc: "Progettazione del motore di calcolo ed erogazione per istituti previdenziali e di assistenza. Gestione di complessi scaglioni di tassazione, rimborsi sanitari, elaborazioni batch notturne e interfacce desktop ad alta produttività per operatori.",
          tech: ["C#", ".NET WPF/WCF", "SQL Server", "Batch Processing", "Enterprise Architecture"]
        },
        {
          tag: "Visualizzazione Dati & Grafi",
          title: "Topologia Dinamica SVG per Esplorazione Relazioni Complesse",
          organization: "Procne S.r.l.",
          desc: "Strumento interattivo per la navigazione visiva di relazioni entità su grafi ad alta densità. Permette analisi di cluster, esplorazione di collegamenti e isolamento di sottografi con rendering dinamico SVG e database a grafi.",
          tech: ["Node.js", "D3.js", "Topologia SVG", "OrientDB", "AngularJS"]
        },
        {
          tag: "Modernizzazione Legacy",
          title: "Migrazione Progressiva da Delphi ad Architettura .NET",
          organization: "SMS Group S.p.a.",
          desc: "Scomposizione strutturata e transizione graduale a caldo di una complessa suite monolitica Delphi verso servizi modulari C#/.NET, preservando l'operatività continua dell'acciaieria attiva 24 ore su 24, 7 giorni su 7.",
          tech: ["Migrazione Architetturale", "Delphi", "C# / .NET", "Clean Architecture", "WCF / Microservizi"]
        }
      ]
    },
    skills: {
      sectionTitle: "Matrice delle Competenze",
      sectionSubtitle: "Competenze tecniche approfondite maturate in oltre vent'anni di progetti in produzione.",
      categories: [
        {
          id: "arch",
          name: "Architettura & Design dei Sistemi",
          items: ["Clean Architecture", "Architetture Event-Driven", "Microservizi", "UNS / Message Brokers", "Sistemi Real-time", "Schema Design", "Integrazione di Sistemi", "Design Pattern Scalabili", "Multithreading & Concorrenza"]
        },
        {
          id: "ot",
          name: "Automazione Industriale & OT",
          items: ["DELMIA Apriso MES", "Kepware OPC (UA/DA)", "SCADA & Automazione Livello 2", "Pipeline Dati Shop-Floor", "Calcolo & Tracciamento OEE", "Commissioning Autonomo On-Site", "Interfacciamento PLC", "Integrazione Computer Vision"]
        },
        {
          id: "lang",
          name: "Linguaggi di Programmazione & Stack",
          items: ["C# (.NET / Core / Framework)", "Ruby (Ruby on Rails)", "Python", "JavaScript & TypeScript", "PHP", "Delphi", "HTML5 & CSS3", "Angular, React, Svelte"]
        },
        {
          id: "data",
          name: "Database, Strumenti & Piattaforme",
          items: ["PostgreSQL", "MS SQL Server", "Oracle", "InfluxDB (Time-series)", "MongoDB", "Redis", "Docker", "Grafana", "Integrazione SAP", "Git", "Jira & Confluence", "Windows & Unix/Linux"]
        }
      ]
    },
    education: {
      sectionTitle: "Formazione & Titoli di Studio",
      sectionSubtitle: "Solide basi tecnico-scientifiche in discipline aeronautiche e tecnologie digitali.",
      items: [
        {
          degree: "Certificato di Tecnico E-commerce",
          institution: "ENAIP – Udine, Italia",
          year: "2004",
          desc: "Specializzazione in architetture web, transazioni e-commerce, basi di dati relazionali e reti aziendali."
        },
        {
          degree: "Diploma di Perito Tecnico Aeronautico",
          institution: 'I.T.I. "A. MALIGNANI" – Udine, Italia',
          year: "2002",
          desc: "Percorso di studi ingegneristico incentrato su aerodinamica, avionica, telemetria di precisione, strumentazione di bordo e controlli automatici."
        }
      ],
      languages: {
        title: "Lingue",
        items: [
          { name: "Italiano", level: "Madrelingua" },
          { name: "Inglese", level: "Conoscenza Professionale Operativa (Documentazione tecnica, commissioning internazionale)" }
        ]
      }
    },
    contact: {
      sectionTitle: "Contatti",
      sectionSubtitle: "Disponibile per opportunità di Technical Leadership, Architettura delle Soluzioni e Progetti IT/OT.",
      cardTitle: "Collaboriamo su sfide ingegneristiche ad alto impatto",
      cardText: "Se devi progettare un'integrazione MES, modernizzare sistemi di automazione legacy o guidare un team di sviluppo verso architetture robuste e scalabili, parliamone.",
      emailLabel: "Email Diretta",
      emailValue: "emanuele.sabbadini@gmail.com",
      linkedinLabel: "Profilo LinkedIn",
      linkedinValue: "linkedin.com/in/emanuele-sabbadini",
      locationLabel: "Sede & Mobilità",
      locationValue: "Udine, Italia (Disponibile per trasferte di commissioning e collaborazioni ibride/remoto)",
      copyEmail: "Copia Email",
      emailCopied: "Email copiata negli appunti!",
      formName: "Nome e Cognome",
      formEmail: "La tua Email",
      formSubject: "Oggetto / Ambito",
      formMessage: "Messaggio / Descrizione del Progetto",
      formSubmit: "Invia Messaggio",
      formSubmitting: "Invio in corso...",
      formSuccess: "✓ Messaggio inviato con successo! Grazie, Emanuele ti risponderà al più presto.",
      formError: "Avviso: Invio web automatico non disponibile. Clicca qui sotto per aprire il client email o copiare il messaggio:",
      formOpenMailto: "Apri Client Email",
      formCopyMsg: "Copia Messaggio",
      formCopied: "Messaggio copiato negli appunti!",
      formNote: "Il tuo messaggio sarà recapitato direttamente a Emanuele.",
      downloadResumeBtn: "Scarica CV Ufficiale (PDF)"
    },
    footer: {
      copyright: "© 2026 Emanuele Sabbadini. Solutions Architect & Technical Lead.",
      privacy: "Autorizzo il trattamento dei miei dati personali ai sensi del D.Lgs. 196/2003 e del GDPR (Regolamento UE 2016/679).",
      domain: "emanuelesabbadini.com"
    }
  }
};
