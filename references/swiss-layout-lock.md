# Swiss Layout Lock

本文件是瑞士主题的硬约束。它的目的不是增加灵感,而是防止生成时“看起来像 Swiss,但已经脱离原始模板”。

## Golden Source

版式基准是仓库内的 `assets/template-swiss.html`(由作者原始参考 PPT 派生;原始文件不随仓库分发,本文件登记的 S01-S22 即其版式快照)。

瑞士主题生成时,除用户明确要求实验版式外,只能从下面登记的 22 个版式中选择。新增首页/尾页可以使用 Skill 里的 IKB ASCII 版本,但正文页必须来自这 22 个版式。

## 生成前硬规则

1. 每个正文页都必须先选一个登记版式,并在 `<section>` 上写 `data-layout="Sxx"`。
2. 不允许临时发明 `P23/P24` 这类未出现在原始 22P 的正文结构。需要图片时,优先使用 `S22 Image Hero`;多图时使用 `S15/S16` 的原始网格骨架做图片格改造,不要发明新的证据墙。唯一登记的交互扩展是 `S08 + Swiss Map Component`,详见 `references/swiss-map-component.md`。
3. 顶部中文标题默认左对齐并贴近左上内容轴。除原始 `S03/S09/S10` 这种 statement/split 版式外,不要把大标题放到页面水平中心。
4. SVG 只能负责几何线条、圆、箭头、路径。不要在 SVG 里写可见文字;所有文字标签用 HTML 放在网格、卡片或 caption 里。
5. 图片槽位和图片生成比例必须绑定。先确定版式和槽位,再生成图片。

## 登记版式

| ID | 原始页 | 名称 | 必须保留的骨架 | 图片规则 |
|---|---:|---|---|---|
| S01 | 01 | Index Cover | 三行 `cover-row`,左大编号,右大标题 | 无 |
| S02 | 02 | Vertical Timeline + KPI | 顶部左对齐标题,中部 `.timeline-v`,底部 `.kpi-row-4` | 无 |
| S03 | 03 | Split Statement | `.slide.split` 双半屏,左巨字,右灰底解释 | 无 |
| S04 | 04 | Six Cells | 顶部左对齐标题,下方 `.sub-grid-3-2` 六卡 | 可把卡片内部换成小图标,不放大图 |
| S05 | 05 | Three Layers | 顶部左对齐标题,下方 `.stack-row` 三大块 | 无 |
| S06 | 06 | KPI Tower | 左标题+右说明,下方不等高 KPI 塔 | 无 |
| S07 | 07 | Horizontal Bar | 左对齐标题,横向条形图 | 无 |
| S08 | 08 | Duo Compare | `.duo-compare` 两列 + 中线 | 无;地点/路线内容可使用 `S08 + Swiss Map Component` 替换右侧插槽 |
