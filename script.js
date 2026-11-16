const fallbackData = {
    "cv": {
      "metadata": {
        "version": "1.0",
        "language": "pt-BR",
        "lastUpdated": "2026-11-16"
      },
      "personalInformation": {
        "fullName": "Gustavo Bernardo Victorino Batista",
        "professionalTitle": "Desenvolvedor Web | Estudante de Análise e Desenvolvimento de Sistemas",
        "profilePhoto": "photo.img.jpg",
        "email": "gustavo.b.victorino@gmail.com",
        "phone": "(11) 97193-4360",
        "whatsapp": "(11) 97193-4360",
        "location": {
          "city": "Suzano",
          "state": "São Paulo",
          "country": "Brazil",
          "address": "Rua Leila Margarida Takeuchi 208"
        },
        "linkedin": "https://www.linkedin.com/in/gustavo-victorino",
        "github": "https://github.com/sug-bit",
        "portfolio": "https://sug-bit.github.io/",
        "website": ""
      },
      "professionalSummary": {
        "description": "Estudante de Análise e Desenvolvimento de Sistemas com foco em desenvolvimento web full-stack, automação em Python e soluções baseadas em Inteligência Artificial Generativa. Experiência prática na construção de interfaces responsivas, lógica de programação, controle de versão com Git e manipulação de dados.",
        "yearsOfExperience": 0,
        "mainSpecialization": "Desenvolvimento Web e Python",
        "careerObjective": "Estágio em Desenvolvimento Web / Inteligência Artificial Generativa"
      },
      "professionalExperience": [
        {
          "company": "SPDM - Hospital Regional do Alto Tietê",
          "position": "Técnico de Enfermagem",
          "employmentType": "CLT",
          "location": "Suzano, SP",
          "startDate": "2025-01",
          "endDate": "",
          "current": true,
          "description": "Atuação em ambiente hospitalar de alta complexidade em escala 12x36, exercendo comunicação assertiva, trabalho em equipe multidisciplinar, gestão de prioridades sob pressão e cumprimento rigoroso de protocolos.",
          "responsibilities": [
            "Execução de procedimentos técnicos seguindo rigorosos padrões de qualidade e segurança",
            "Registro e organização de dados operacionais e clínicos",
            "Colaboração com equipes multidisciplinares para resolução ágil de demandas"
          ],
          "achievements": [],
          "technologies": []
        }
      ],
      "education": [
        {
          "institution": "Centro Universitário Piaget (UniPiaget)",
          "degree": "Tecnólogo",
          "fieldOfStudy": "Análise e Desenvolvimento de Sistemas",
          "level": "Ensino Superior",
          "startDate": "2026-08",
          "endDate": "2029-02",
          "current": true,
          "description": "Formação focada em engenharia de software, lógica de programação, algoritmos, desenvolvimento web, estruturas de dados e banco de dados."
        }
      ],
      "skills": {
        "technical": [
          { "name": "HTML5", "level": "Intermediário" },
          { "name": "CSS3", "level": "Intermediário" },
          { "name": "JavaScript", "level": "Intermediário" },
          { "name": "Python", "level": "Intermediário" }
        ],
        "behavioral": [
          "Resolução de problemas",
          "Trabalho sob pressão",
          "Comunicação assertiva",
          "Aprendizado contínuo",
          "Trabalho em equipe"
        ],
        "tools": ["Git", "GitHub", "Visual Studio Code", "GitHub Pages"],
        "methodologies": ["Controle de Versão", "Desenvolvimento Modular"]
      },
      "languages": [
        { "name": "Português", "proficiency": "Nativo" },
        { "name": "Inglês", "proficiency": "Básico" }
      ],
      "certifications": [],
      "projects": [
        {
          "name": "Painel do Dono - Data Warehouse Financeiro",
          "description": "Aplicação web de análise financeira com integração back-end em Python, cadastro de clientes, controles dinâmicos de interface e alternância entre temas claro e escuro.",
          "role": "Desenvolvedor Full-Stack",
          "technologies": ["Python", "HTML", "CSS", "JavaScript", "Git"],
          "url": "https://github.com/sug-bit",
          "startDate": "2026-10",
          "endDate": "2026-11"
        },
        {
          "name": "Calculadora de Compras com Desconto Progressivo",
          "description": "Protótipo funcional modular para cálculo dinâmico de compras e aplicação automática de faixas de desconto progressivo por meio de eventos DOM.",
          "role": "Desenvolvedor Front-End",
          "technologies": ["HTML", "CSS", "JavaScript"],
          "url": "https://github.com/sug-bit",
          "startDate": "2026-10",
          "endDate": "2026-10"
        },
        {
          "name": "Portfólio Web Pessoal",
          "description": "Página web responsiva hospedada no GitHub Pages para apresentação de projetos, habilidades técnicas e informações de contato.",
          "role": "Desenvolvedor Front-End",
          "technologies": ["HTML", "CSS", "JavaScript"],
          "url": "https://sug-bit.github.io/",
          "startDate": "2026-09",
          "endDate": "2026-11"
        }
      ],
      "courses": [
        {
          "name": "Curso de Programação",
          "institution": "Curso em Vídeo",
          "completionDate": "2026-10",
          "workloadHours": 40
        }
      ],
      "additionalInformation": {
        "availability": "Imediata",
        "workModel": "Híbrido, Remoto ou Presencial",
        "travelAvailability": true,
        "additionalNotes": "Disponível para atuar na região de São Paulo."
      },
      "preferences": {
        "targetPositions": [
          "Estagiário em Desenvolvimento Web",
          "Estagiário em Inteligência Artificial Generativa",
          "Desenvolvedor Web",
          "Desenvolvedor Front-End Júnior"
        ],
        "targetIndustries": [
          "Tecnologia da Informação",
          "Desenvolvimento de Software",
          "Inteligência Artificial"
        ],
        "preferredLocations": ["Suzano", "São Paulo", "Remoto"],
        "preferredWorkModel": "Híbrido"
      }
    }
  };
  
  function renderCV(cv) {
    const { metadata, personalInformation: info, professionalSummary: summary } = cv;
  
    document.getElementById("lastUpdated").textContent = `Atualizado em: ${metadata.lastUpdated} (v${metadata.version})`;
  
    // Cabeçalho
    document.getElementById("fullName").textContent = info.fullName;
    document.getElementById("professionalTitle").textContent = info.professionalTitle;
  
    const photoWrapper = document.getElementById("photoWrapper");
    const photoImg = document.getElementById("profilePhoto");
    if (info.profilePhoto) {
      photoImg.src = info.profilePhoto;
      photoImg.onerror = () => { photoWrapper.style.display = "none"; };
    } else {
      photoWrapper.style.display = "none";
    }
  
    document.getElementById("contactList").innerHTML = `
      <span>📍 ${info.location.city}, ${info.location.state}</span>
      <span>✉️ ${info.email}</span>
      <span>📱 ${info.phone}</span>
    `;
  
    const socialItems = [];
    if (info.linkedin) socialItems.push(`<a href="${info.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>`);
    if (info.github) socialItems.push(`<a href="${info.github}" target="_blank" rel="noopener">GitHub ↗</a>`);
    if (info.portfolio) socialItems.push(`<a href="${info.portfolio}" target="_blank" rel="noopener">Portfólio ↗</a>`);
    if (info.website) socialItems.push(`<a href="${info.website}" target="_blank" rel="noopener">Website ↗</a>`);
    document.getElementById("linksList").innerHTML = socialItems.join("");
  
    // Resumo
    document.getElementById("summaryDescription").textContent = summary.description;
    document.getElementById("summaryBadges").innerHTML = `
      <span class="chip chip-accent">Objetivo: ${summary.careerObjective}</span>
      <span class="chip">Especialização: ${summary.mainSpecialization}</span>
    `;
  
    // Projetos
    document.getElementById("projectsContainer").innerHTML = cv.projects.map(p => `
      <article class="entry-card">
        <div class="entry-top">
          <span class="entry-title">${p.name}</span>
          <span class="entry-period">${p.startDate} — ${p.endDate}</span>
        </div>
        <div class="entry-sub">${p.role}</div>
        <p class="entry-desc">${p.description}</p>
        <div class="tags-wrap">
          ${p.technologies.map(tech => `<span class="chip">${tech}</span>`).join("")}
        </div>
        ${p.url ? `<a class="entry-link" href="${p.url}" target="_blank" rel="noopener">Acessar projeto ↗</a>` : ""}
      </article>
    `).join("");
  
    // Experiência Profissional
    document.getElementById("experienceContainer").innerHTML = cv.professionalExperience.map(exp => `
      <article class="entry-card">
        <div class="entry-top">
          <span class="entry-title">${exp.position}</span>
          <span class="entry-period">${exp.startDate} — ${exp.current ? "Atual" : exp.endDate}</span>
        </div>
        <div class="entry-sub">${exp.company} • ${exp.location} (${exp.employmentType})</div>
        <p class="entry-desc">${exp.description}</p>
        ${exp.responsibilities.length ? `
          <ul class="entry-list">
            ${exp.responsibilities.map(item => `<li>${item}</li>`).join("")}
          </ul>
        ` : ""}
      </article>
    `).join("");
  
    // Formação Acadêmica
    document.getElementById("educationContainer").innerHTML = cv.education.map(edu => `
      <article class="entry-card">
        <div class="entry-top">
          <span class="entry-title">${edu.degree} em ${edu.fieldOfStudy}</span>
          <span class="entry-period">${edu.startDate} — ${edu.endDate}</span>
        </div>
        <div class="entry-sub">${edu.institution} • ${edu.level}</div>
        <p class="entry-desc">${edu.description}</p>
      </article>
    `).join("");
  
    // Habilidades Técnicas
    document.getElementById("technicalSkillsContainer").innerHTML = cv.skills.technical.map(skill => `
      <div class="skill-item">
        <span>${skill.name}</span>
        <span class="skill-badge">${skill.level}</span>
      </div>
    `).join("");
  
    // Ferramentas e Metodologias
    const toolsAndMethods = [...cv.skills.tools, ...cv.skills.methodologies];
    document.getElementById("toolsContainer").innerHTML = toolsAndMethods
      .map(item => `<span class="chip">${item}</span>`).join("");
  
    // Cursos
    document.getElementById("coursesContainer").innerHTML = cv.courses.map(c => `
      <div class="entry-card">
        <div class="entry-title" style="font-size: 0.92rem;">${c.name}</div>
        <div class="entry-sub">${c.institution} • ${c.workloadHours}h (${c.completionDate})</div>
      </div>
    `).join("");
  
    // Certificações (exibe automaticamente se você adicionar itens no futuro)
    if (cv.certifications && cv.certifications.length > 0) {
      document.getElementById("certificationsSection").style.display = "block";
      document.getElementById("certificationsContainer").innerHTML = cv.certifications.map(cert => `
        <div class="entry-card">
          <div class="entry-title" style="font-size: 0.92rem;">${cert.name}</div>
          <div class="entry-sub">${cert.issuer} (${cert.issueDate})</div>
        </div>
      `).join("");
    }
  
    // Soft Skills
    document.getElementById("behavioralContainer").innerHTML = cv.skills.behavioral
      .map(skill => `<span class="chip">${skill}</span>`).join("");
  
    // Idiomas
    document.getElementById("languagesContainer").innerHTML = cv.languages
      .map(lang => `<li><strong>${lang.name}:</strong> ${lang.proficiency}</li>`).join("");
  
    // Disponibilidade & Preferências
    const infoAdd = cv.additionalInformation;
    const pref = cv.preferences;
    document.getElementById("availabilityContainer").innerHTML = `
      <p><strong>Disponibilidade:</strong> ${infoAdd.availability}</p>
      <p><strong>Modelo de trabalho:</strong> ${infoAdd.workModel}</p>
      <p><strong>Locais preferenciais:</strong> ${pref.preferredLocations.join(", ")}</p>
      <p><strong>Cargos alvo:</strong> ${pref.targetPositions.join(", ")}</p>
      <p>${infoAdd.additionalNotes}</p>
    `;
  }
  
  // Alternar Tema
  document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  // Tenta carregar cv.json via fetch; se falhar (ex: file://), usa fallbackData
  async function init() {
    try {
      const response = await fetch("./cv.json");
      if (!response.ok) throw new Error("Arquivo cv.json não encontrado");
      const jsonData = await response.json();
      renderCV(jsonData.cv);
    } catch {
      renderCV(fallbackData.cv);
    }
  }
  
  init();