# GPT-M 2.0 配图提示词

用于 Codex 环境下为本 skill 生成 PPT 配图。提示词只负责定基调,不要写成长篇说明。先判断图片落位和比例,再选择类型。

## 通用规则

- 先判断当前 deck 风格:风格 A = 电子杂志 × 电子墨水;风格 B = 瑞士国际主义 / Swiss Style
- 风格 A 基调:电子杂志 × 电子墨水,克制、真实、留白充足,适合横向网页 PPT
- 风格 B 基调:Swiss International Typographic Style,12/16 列网格、Helvetica/Inter 气质、单一高饱和 accent、直角纯色、发丝线、极大留白
- 信息图、图表、截图再设计中的文字语言必须跟随用户语言:中文 deck 用中文,英文 deck 用英文
- 不生成卡通、3D、霓虹科技感、SaaS 模板感、过度装饰或假 logo
- 图片要给标题或正文留出可叠加空间,不要满屏堆细节
- 同一页或同一组图片必须使用同一比例、同一视觉缩放、同一边距密度
- 配图是嵌入 PPT 的素材,不是一张独立 slide:不要生成页眉、页脚、页码、标题栏、角标、署名、装饰边框或 slide chrome
- 生成后保存到 `images/`,命名为 `{页号}-{语义}.{ext}`

## 比例选择

| 用途 | 推荐比例 | HTML 落位 |
|------|---------|-----------|
| 左文右图 主图 | 16:10 或 4:3 | `.frame-img.r-16x10` 或 `.frame-img.r-4x3` |
| 图片网格（多图对比） | 统一 | `.frame-img.h-22` / `.frame-img.h-26`，不用 aspect-ratio |
| 小型面板组 | 统一 | `.frame-img.h-16` / `.frame-img.h-18`，同组必须同高 |
| 左小图 + 右文字 | 1:1 或 3:2 | `.frame-img.r-1x1` 或 `.frame-img.r-3x2` |
| 全屏主视觉 | 16:9 | `.frame-img.r-16x9` |
| 信息图 / 截图再设计 | 16:9 或 16:10 | `.frame-img.r-16x9.fit-contain` 或 `.frame-img.r-16x10.fit-contain` |
| 图文混排小插图 | 3:2 或 3:4 | `.frame-img.r-3x2` 或 `.frame-img.r-3x4` |

图片必须包在 `<figure class="frame-img">` 里。默认照片会 `object-fit:cover + object-position:top center`,只裁底部,不裁顶/左/右。信息图和截图再设计必须加 `.fit-contain`,避免文字或标注被裁切。
