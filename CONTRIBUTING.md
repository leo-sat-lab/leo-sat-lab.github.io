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
author: 作者姓名或笔名
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

### 4. 新闻会显示在哪里

- 主页 `Latest News` 只列最近几条，以及全部新闻页每页几条，**两个数字都在 `_config.yml`**：`news_home_count`（当前 5）与 `news_per_page`（当前 7）。改完 commit + push 即可，不需要动模板。
- 全部新闻在 `https://leo-sat-lab.github.io/news/`：列出全部文章并自动分页，超过一页时底部出现页码（页码写进地址，可直接分享给别人看第二页）。
- 每篇文章底部会自动出现「上一篇 / 下一篇」，按发布时间取相邻文章，不用手写。
- 配图放入 `img/`，单张控制在 300 KB 以内（长边 1400 px 已够网页使用），写法：
  `<img src="{{ site.baseurl }}/img/文件名.jpg" alt="说明" style="max-width: 100%; height: auto;">`
  不加 `style` 也不会撑破正文列，但请保持图片文件名只用英文、数字和连字符。

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
author: Your Name
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

### 4. Where Your News Shows Up

- The number of items on the homepage `Latest News` block and per page on the archive are **both in `_config.yml`**: `news_home_count` (currently 5) and `news_per_page` (currently 7). Edit, commit, push — no template changes.
- All posts live at `https://leo-sat-lab.github.io/news/` with automatic paging; page numbers live in the URL hash, so a link to page 2 can be shared.
- Every post gets a Previous / Next pair at the bottom automatically, resolved from the posts adjacent in publish time.
- Put images in `img/`, keep each under 300 KB (1400 px on the long edge is plenty for the web), and write them as
  `<img src="{{ site.baseurl }}/img/file-name.jpg" alt="caption" style="max-width: 100%; height: auto;">`
  Naming: letters, digits and hyphens only.