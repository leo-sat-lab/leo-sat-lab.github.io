# LEO Sat Lab

**Small Satellites, Big Questions** — Student CubeSat Laboratory

面向低轨小卫星的学生实验室。从概念设计、结构样机到在轨试验，记录每一次迭代与思考。

## How to Use

This is a Jekyll-based website hosted on GitHub Pages.

### Local Preview

```bash
bundle exec jekyll serve
```

### Add a News Post

Create a new file in `_posts/` with the format `YYYY-MM-DD-title.md`. Use the front matter:

```yaml
---
layout: post
title: "Post title (bilingual: EN / CN)"
date: YYYY-MM-DD
---
```

### Deploy

Push to the `main` branch of `leo-sat-lab/leo-sat-lab.github.io`. GitHub Pages will build automatically.