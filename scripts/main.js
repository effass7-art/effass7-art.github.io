(function () {
  const PROJECTS = [
    {
      id: "research-dashboard",
      title: "科研数据看板重构",
      summary:
        "面向课题组的数据看板重构项目，解决原系统指标不统一、信息定位慢、报告复用弱的问题。",
      year: "2025",
      role: "前端负责人 / 交互设计",
      keywords: ["Data Dashboard", "Design System", "Usability"],
      sections: [
        {
          id: "background",
          title: "项目背景",
          paragraphs: [
            "原有看板由多名成员分散维护，图表命名与筛选条件不一致，导致同一指标在不同页面解释不一致。",
            "团队每周例会需要人工整合截图，信息传递链路长，无法支撑快速决策。"
          ],
          points: [
            "核心问题一：指标定义不统一，结论不可直接对比。",
            "核心问题二：页面层级过深，关键数据平均需要 4 次点击。",
            "核心问题三：导出内容缺乏结构，无法直接用于汇报。"
          ]
        },
        {
          id: "solution",
          title: "方案设计",
          paragraphs: [
            "我将信息架构重排为“全局概览-专题分析-样本追踪”三层，建立统一指标字典并绑定组件渲染规则。",
            "在视觉上采用网格化布局和固定阅读路径，保证实验人员在高信息密度下仍能快速定位异常。"
          ],
          points: [
            "统一命名规则：指标名、单位、更新时间三元绑定。",
            "搭建卡片组件库：趋势图、对比表、预警条统一配置。",
            "增加报告视图：一键导出会议版页面快照。"
          ]
        },
        {
          id: "result",
          title: "结果与复盘",
          paragraphs: [
            "上线后两周内，周报准备时间由平均 90 分钟降低至 35 分钟，重点异常定位速度显著提升。",
            "团队复盘确认：结构化指标体系比单纯图表美化更能提升科研协作效率。"
          ],
          points: [
            "关键指标查找步骤减少约 45%。",
            "每周重复整理工作量减少约 60%。",
            "后续可扩展方向：接入自动化实验日志与模型版本追踪。"
          ]
        }
      ],
      videoUrl: ""
    },
    {
      id: "experiment-platform",
      title: "实验流程平台化",
      summary:
        "将分散在文档和聊天记录中的实验流程沉淀为平台模块，提升实验复现性和协作效率。",
      year: "2024",
      role: "产品设计 / 前端开发",
      keywords: ["Workflow", "Platform", "Collaboration"],
      sections: [
        {
          id: "challenge",
          title: "问题定义",
          paragraphs: [
            "实验步骤长期依赖个人经验，参数变更记录分散，导致新成员接手成本高、复现实验耗时长。",
            "同一实验在不同阶段需要多工具切换，任务状态透明度不足。"
          ],
          points: [
            "复现实验平均需要追溯 5-8 份文档。",
            "阶段负责人对跨阶段风险感知滞后。"
          ]
        },
        {
          id: "implementation",
          title: "实施路径",
          paragraphs: [
            "平台采用任务节点化建模：每个节点包含输入条件、执行参数、预期产出和校验标准。",
            "我负责前端实现与交互规范，把参数模板、变更记录和审批流在单页内完成闭环。"
          ],
          points: [
            "统一任务状态机：待执行、执行中、待复核、已归档。",
            "新增实验快照：保存关键配置并可一键回滚。",
            "添加审计面板：按时间线追踪每次参数修改。"
          ]
        },
        {
          id: "impact",
          title: "项目效果",
          paragraphs: [
            "平台投入使用后，新成员完成一次标准实验流程的学习周期显著缩短。",
            "团队逐步形成可复盘、可审核、可迁移的实验执行规范。"
          ],
          points: [
            "实验复现准备时间缩短约 50%。",
            "跨成员交接中断率明显下降。",
            "流程模板已沉淀为课题组内部标准。"
          ]
        }
      ],
      videoUrl: ""
    },
    {
      id: "paper-toolkit",
      title: "论文辅助工具集",
      summary:
        "围绕论文写作与结果展示构建轻量工具集，覆盖图表整理、术语一致性检查与版本追踪。",
      year: "2026",
      role: "独立开发",
      keywords: ["Writing", "Quality Control", "Tooling"],
      sections: [
        {
          id: "goal",
          title: "目标设定",
          paragraphs: [
            "论文迭代中常见的问题是术语不一致、图表版本混乱、多人修改冲突，直接影响最终质量。",
            "该工具集的目标是降低机械校对成本，把精力集中在论证质量本身。"
          ]
        },
        {
          id: "modules",
          title: "核心模块",
          paragraphs: [
            "工具集由三个模块组成：术语词典校验、图表资产映射、稿件版本差异标注。",
            "前端界面聚焦“快速定位问题”，支持按章节查看异常点并导出修改建议。"
          ],
          points: [
            "术语词典：自动标记同义词混用与缩写冲突。",
            "图表映射：建立图号、数据源、解释文本的一致性检查。",
            "版本差异：高亮结构调整与关键结论改动。"
          ]
        },
        {
          id: "conclusion",
          title: "阶段结论",
          paragraphs: [
            "经过一个完整写作周期验证，工具集在提升文稿一致性方面效果明确，尤其适用于多轮协作场景。",
            "下一阶段计划接入引用格式规则与审稿意见分类整理模块。"
          ]
        }
      ],
      videoUrl: ""
    }
  ];

  const projectMap = new Map(PROJECTS.map((project) => [project.id, project]));

  function initMobileNav() {
    const nav = document.querySelector("[data-nav]");
    const toggle = document.querySelector("[data-menu-toggle]");
    if (!nav || !toggle) {
      return;
    }

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function updateYear() {
    const yearNode = document.querySelector("[data-year]");
    if (yearNode) {
      yearNode.textContent = String(new Date().getFullYear());
    }
  }

  function renderHomeProjects() {
    const listNode = document.querySelector("[data-project-list]");
    if (!listNode) {
      return;
    }

    const fragment = document.createDocumentFragment();

    PROJECTS.forEach((project, index) => {
      const card = document.createElement("a");
      card.className = "project-card reveal";
      card.href = "project.html?id=" + encodeURIComponent(project.id);
      card.style.setProperty("--delay", `${Math.min(index * 0.06, 0.2)}s`);

      const title = document.createElement("h3");
      title.textContent = project.title;

      const summary = document.createElement("p");
      summary.textContent = project.summary;

      const metaLine = document.createElement("div");
      metaLine.className = "project-meta-line";

      const keywords = document.createElement("span");
      keywords.className = "project-keywords";
      keywords.textContent = project.keywords.join(" / ");

      const hint = document.createElement("span");
      hint.className = "project-link-hint";
      hint.textContent = "进入详情";

      metaLine.append(keywords, hint);
      card.append(title, summary, metaLine);
      fragment.appendChild(card);
    });

    listNode.innerHTML = "";
    listNode.appendChild(fragment);
  }

  function renderProjectDetail() {
    if (document.body.getAttribute("data-page") !== "project") {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const requestedId = params.get("id") || "";
    const currentProject = projectMap.get(requestedId) || PROJECTS[0];

    if (!currentProject) {
      return;
    }

    const titleNode = document.querySelector("[data-project-title]");
    const summaryNode = document.querySelector("[data-project-summary]");
    const metaNode = document.querySelector("[data-project-meta]");
    const contentNode = document.querySelector("[data-project-content]");
    const outlineNode = document.querySelector("[data-project-outline]");

    if (titleNode) {
      titleNode.textContent = currentProject.title;
    }
    if (summaryNode) {
      summaryNode.textContent = currentProject.summary;
    }
    if (metaNode) {
      metaNode.innerHTML = "";
      [
        "年份: " + currentProject.year,
        "角色: " + currentProject.role,
        "关键词: " + currentProject.keywords.join(", ")
      ].forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        metaNode.appendChild(li);
      });
    }

    if (contentNode) {
      contentNode.innerHTML = "";

      currentProject.sections.forEach((section, index) => {
        const sectionNode = document.createElement("section");
        sectionNode.className = "reveal";
        sectionNode.id = section.id;
        sectionNode.style.setProperty("--delay", `${Math.min(index * 0.04, 0.16)}s`);

        const heading = document.createElement("h2");
        heading.textContent = section.title;

        sectionNode.appendChild(heading);

        (section.paragraphs || []).forEach((text) => {
          const paragraph = document.createElement("p");
          paragraph.textContent = text;
          sectionNode.appendChild(paragraph);
        });

        if (Array.isArray(section.points) && section.points.length > 0) {
          const list = document.createElement("ul");
          section.points.forEach((point) => {
            const item = document.createElement("li");
            item.textContent = point;
            list.appendChild(item);
          });
          sectionNode.appendChild(list);
        }

        contentNode.appendChild(sectionNode);
      });

      const videoSection = document.createElement("section");
      videoSection.className = "video-card reveal";
      videoSection.id = "project-video";
      videoSection.style.setProperty("--delay", "0.16s");

      const videoTitle = document.createElement("h2");
      videoTitle.textContent = "项目介绍视频";

      const videoTip = document.createElement("p");
      videoTip.textContent =
        "支持添加 MP4 地址、YouTube 链接或 Bilibili 视频页链接。视频地址会保存到当前浏览器本地。";

      const videoRender = document.createElement("div");
      videoRender.className = "video-render";
      videoRender.setAttribute("data-video-render", "");

      const videoForm = document.createElement("div");
      videoForm.className = "video-form";

      const videoInput = document.createElement("input");
      videoInput.type = "url";
      videoInput.placeholder = "粘贴视频链接，如 https://...";
      videoInput.setAttribute("data-video-input", "");

      const saveButton = document.createElement("button");
      saveButton.type = "button";
      saveButton.textContent = "保存视频";
      saveButton.setAttribute("data-video-save", "");

      const clearButton = document.createElement("button");
      clearButton.type = "button";
      clearButton.textContent = "清除";
      clearButton.setAttribute("data-video-clear", "");

      videoForm.append(videoInput, saveButton, clearButton);

      const status = document.createElement("p");
      status.className = "video-status";
      status.setAttribute("data-video-status", "");

      videoSection.append(videoTitle, videoTip, videoRender, videoForm, status);
      contentNode.appendChild(videoSection);

      initVideoFeature(currentProject);
    }

    if (outlineNode) {
      outlineNode.innerHTML = "";
      const outlineItems = [...currentProject.sections.map((section) => ({
        id: section.id,
        title: section.title
      })), { id: "project-video", title: "项目介绍视频" }];

      outlineItems.forEach((item) => {
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = "#" + item.id;
        anchor.textContent = item.title;
        li.appendChild(anchor);
        outlineNode.appendChild(li);
      });
    }

    document.title = `${currentProject.title} | 项目详情 | Renha`;
    initOutlineSpy();
  }

  function initOutlineSpy() {
    const outlineLinks = Array.from(
      document.querySelectorAll("[data-project-outline] a[href^='#']")
    );

    if (!outlineLinks.length) {
      return;
    }

    const linkById = new Map(
      outlineLinks.map((link) => [link.getAttribute("href").slice(1), link])
    );

    const targets = outlineLinks
      .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
      .filter(Boolean);

    function markActive(id) {
      outlineLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + id);
      });
    }

    if (!targets.length) {
      return;
    }

    markActive(targets[0].id);

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          .forEach((entry) => {
            const activeLink = linkById.get(entry.target.id);
            if (activeLink) {
              markActive(entry.target.id);
            }
          });
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.2, 0.4, 0.7]
      }
    );

    targets.forEach((target) => observer.observe(target));
  }

  function initVideoFeature(project) {
    const input = document.querySelector("[data-video-input]");
    const saveButton = document.querySelector("[data-video-save]");
    const clearButton = document.querySelector("[data-video-clear]");
    const status = document.querySelector("[data-video-status]");
    const renderNode = document.querySelector("[data-video-render]");

    if (!input || !saveButton || !clearButton || !status || !renderNode) {
      return;
    }

    const key = `project-video-${project.id}`;
    const savedUrl = readLocalValue(key) || project.videoUrl || "";

    input.value = savedUrl;
    renderVideo(renderNode, savedUrl);

    saveButton.addEventListener("click", () => {
      const url = input.value.trim();
      if (!url) {
        status.textContent = "请输入视频链接后再保存。";
        return;
      }

      const source = parseVideoSource(url);
      if (!source) {
        status.textContent = "链接格式无法识别，请填写有效的 http(s) 视频地址。";
        return;
      }

      writeLocalValue(key, url);
      renderVideo(renderNode, url);
      status.textContent = "视频已保存到本地浏览器。";
    });

    clearButton.addEventListener("click", () => {
      removeLocalValue(key);
      input.value = "";
      renderVideo(renderNode, "");
      status.textContent = "已清除该项目的视频链接。";
    });
  }

  function parseVideoSource(rawUrl) {
    if (!rawUrl) {
      return null;
    }

    let url;
    try {
      url = new URL(rawUrl);
    } catch (_) {
      return null;
    }

    const protocol = url.protocol.toLowerCase();
    if (protocol !== "http:" && protocol !== "https:") {
      return null;
    }

    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    const path = url.pathname;

    if (/\.(mp4|webm|ogg)$/i.test(path)) {
      return {
        type: "html5",
        src: url.toString()
      };
    }

    if (host === "youtu.be") {
      const videoId = path.split("/").filter(Boolean)[0];
      if (videoId) {
        return {
          type: "iframe",
          src: `https://www.youtube.com/embed/${videoId}`
        };
      }
    }

    if (host.includes("youtube.com")) {
      const videoId = url.searchParams.get("v");
      if (videoId) {
        return {
          type: "iframe",
          src: `https://www.youtube.com/embed/${videoId}`
        };
      }

      const shortsMatch = path.match(/^\/shorts\/([^/]+)/);
      if (shortsMatch) {
        return {
          type: "iframe",
          src: `https://www.youtube.com/embed/${shortsMatch[1]}`
        };
      }

      if (path.startsWith("/embed/")) {
        return {
          type: "iframe",
          src: url.toString()
        };
      }
    }

    if (host.includes("bilibili.com")) {
      if (host.startsWith("player.")) {
        return {
          type: "iframe",
          src: url.toString()
        };
      }

      const bvidMatch = path.match(/\/video\/(BV[0-9A-Za-z]+)/);
      if (bvidMatch) {
        return {
          type: "iframe",
          src: `https://player.bilibili.com/player.html?bvid=${bvidMatch[1]}&page=1`
        };
      }
    }

    return {
      type: "iframe",
      src: url.toString()
    };
  }

  function renderVideo(container, url) {
    container.innerHTML = "";
    const source = parseVideoSource(url);

    if (!source) {
      const placeholder = document.createElement("p");
      placeholder.className = "video-placeholder";
      placeholder.textContent = "当前未添加视频。输入链接后点击“保存视频”。";
      container.appendChild(placeholder);
      return;
    }

    if (source.type === "html5") {
      const video = document.createElement("video");
      video.controls = true;
      video.preload = "metadata";
      video.src = source.src;
      container.appendChild(video);
      return;
    }

    const frame = document.createElement("iframe");
    frame.src = source.src;
    frame.loading = "lazy";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.allowFullscreen = true;
    frame.title = "项目介绍视频";
    frame.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );

    container.appendChild(frame);
  }

  function readLocalValue(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (_) {
      return "";
    }
  }

  function writeLocalValue(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (_) {
      return;
    }
  }

  function removeLocalValue(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (_) {
      return;
    }
  }

  function initReveal() {
    const nodes = Array.from(document.querySelectorAll(".reveal")).filter(
      (node) => !node.classList.contains("show")
    );

    if (!nodes.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("show"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    nodes.forEach((node) => observer.observe(node));
  }

  initMobileNav();
  updateYear();
  renderHomeProjects();
  renderProjectDetail();
  initReveal();
})();
