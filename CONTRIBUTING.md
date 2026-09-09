# 如何发布新闻 / How to Publish News

## 中文说明

欢迎为 LEO Sat Lab 主页贡献新闻！只需三步：

### 1. 克隆仓库

```bash
git clone https://github.com/leo-sat-lab/leo-sat-lab.github.io.git
cd leo-sat-lab.github.io
```

### 2. 撰写新闻

在 `_posts/` 文件夹下新建文件，文件名格式：`YYYY-MM-DD-英文关键词.md`。例如：

```
2026-09-08-antenna-test.md
```

文件内容按以下模板填写（中文段落后紧跟英文段落）：

```yaml
---
layout: post
title: "新闻标题 / English Title"
date: YYYY-MM-DD
---

<p>
  中文：第一段简要描述事件。
</p>
<p class="en">
  English: First paragraph — briefly describe the event.
</p>

<p>
  中文：第二段补充细节。
</p>
<p class="en">
  English: Second paragraph — add details.
</p>
```

### 3. 提交并推送

```bash
git add _posts/2026-09-08-antenna-test.md
git commit -m "Add news: short description"
git push
```

推送后约 1-2 分钟，新闻会自动出现在主页 `https://leo-sat-lab.github.io/`。

> **提示**：如果之前没操作过 Git，请在 VS Code 中打开仓库文件夹，使用图形界面的 Source Control 面板完成 commit 和 push 操作。

---

## English Guide

Welcome! Adding news to the LEO Sat Lab homepage takes just three steps:

### 1. Clone the Repository

```bash
git clone https://github.com/leo-sat-lab/leo-sat-lab.github.io.git
cd leo-sat-lab.github.io
```

### 2. Write Your Post

Create a new file in the `_posts/` folder. File name format: `YYYY-MM-DD-keywords.md`. Example:

```
2026-09-08-antenna-test.md
```

Use the template below (Chinese paragraph followed by English paragraph):

```yaml
---
layout: post
title: "新闻标题 / English Title"
date: YYYY-MM-DD
---

<p>
  中文段落。
</p>
<p class="en">
  English paragraph.
</p>
```

### 3. Commit and Push

```bash
git add _posts/2026-09-08-antenna-test.md
git commit -m "Add news: short description"
git push
```

The news will appear on the homepage at `https://leo-sat-lab.github.io/` within 1–2 minutes.

> **Tip**: If you're not familiar with Git commands, open the project folder in VS Code and use the Source Control panel to commit and push.