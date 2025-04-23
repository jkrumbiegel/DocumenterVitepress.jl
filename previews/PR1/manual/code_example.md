
# Julia code examples {#Julia-code-examples}

**Fonts**

This package uses the JuliaMono font by default, but you can override this in CSS.

This is what some common symbols look like:

```julia
] [ = $ ; ( @ { " ) ? . } ⊽ ⊼ ⊻ ⊋ ⊊ ⊉ ⊈ ⊇ ⊆ ≥ ≤ ≢ ≡ ≠ ≉ ≈ ∪ ∩ ∜ ∛ √ ∘ ∌
|> /> ^ % ` ∈
```


## @example

The `Julia` code used here is done using the following packages versions:

**Input**

````
```@example version
using Pkg
Pkg.status()
```
````


**Output**

```julia
using Pkg
Pkg.status()
```


```
Status `~/work/DocumenterVitepress.jl/DocumenterVitepress.jl/docs/Project.toml`
  [e30172f5] Documenter v1.10.1
  [daee34ce] DocumenterCitations v1.3.7
  [4710194d] DocumenterVitepress v0.1.12 `~/work/DocumenterVitepress.jl/DocumenterVitepress.jl`
```


And a simple sum:

**Input**

````
```@example simple_sum
2 + 2
```
````


**Output**

```julia
2 + 2
```


```
4
```


## @ansi

**Input**

````
```@ansi
printstyled("this is my color"; color = :red)
```
````


**Output**

```julia
julia> printstyled("this is my color"; color = :red)
```

```ansi
[31mthis is my color[39m
```


A more colorful example from [documenter](https://documenter.juliadocs.org/stable/showcase/#Raw-ANSI-code-output):

**Input**

````
```@ansi
for color in 0:15
    print("\e[38;5;$color;48;5;$(color)m  ")
    print("\e[49m", lpad(color, 3), " ")
    color % 8 == 7 && println() # ‎[!code highlight]
end
```
````


**Output**

```julia
julia> for color in 0:15
           print("\e[38;5;$color;48;5;$(color)m  ")
           print("\e[49m", lpad(color, 3), " ")
           color % 8 == 7 && println() # [!code highlight]
       end
```

```ansi
[38;5;0;48;5;0m  [49m  0 [38;5;1;48;5;1m  [49m  1 [38;5;2;48;5;2m  [49m  2 [38;5;3;48;5;3m  [49m  3 [38;5;4;48;5;4m  [49m  4 [38;5;5;48;5;5m  [49m  5 [38;5;6;48;5;6m  [49m  6 [38;5;7;48;5;7m  [49m  7 
[38;5;8;48;5;8m  [49m  8 [38;5;9;48;5;9m  [49m  9 [38;5;10;48;5;10m  [49m 10 [38;5;11;48;5;11m  [49m 11 [38;5;12;48;5;12m  [49m 12 [38;5;13;48;5;13m  [49m 13 [38;5;14;48;5;14m  [49m 14 [38;5;15;48;5;15m  [49m 15
```


## @eval

From [Julia&#39;s documentation](https://docs.julialang.org/en/v1/) landing page.

**Input**

````
```@eval
io = IOBuffer()
release = isempty(VERSION.prerelease)
v = "$(VERSION.major).$(VERSION.minor)"
!release && (v = v*"-$(first(VERSION.prerelease))")
print(io, """
    # Julia $(v) Documentation

    Welcome to the documentation for Julia $(v).

    """)
if true # !release
    print(io,"""
        !!! warning "Work in progress!"
            This documentation is for an unreleased, in-development, version of Julia.
        """)
end
import Markdown
Markdown.parse(String(take!(io)))
```

```@eval
file = "julia-1.10.2.pdf"
url = "https://raw.githubusercontent.com/JuliaLang/docs.julialang.org/assets/$(file)"
import Markdown
Markdown.parse("""
!!! note
    The documentation is also available in PDF format: [$file]($url).
""")
```
````


**Output**

# Julia 1.11 Documentation

Welcome to the documentation for Julia 1.11.

::: warning Work in progress!

This documentation is for an unreleased, in-development, version of Julia.

:::

::: tip Note

The documentation is also available in PDF format: [julia-1.10.2.pdf](https://raw.githubusercontent.com/JuliaLang/docs.julialang.org/assets/julia-1.10.2.pdf).

:::

## @repl

**Input**

````
```@repl
a = 1;
b = 2;
a + b
```
````


**Output**

```julia
julia> a = 1;

julia> b = 2;

julia> a + b
3
```


**Input**

````
```@repl
a = 1;
b = 2; # [!code focus] # hide
a + b
```
````


**Output**

```julia
julia> a = 1;

julia> a + b
3
```


## @doctest

**Input**

````
```@doctest
julia> 1 + 1
2

```
````


**Output**

```julia
julia> 1 + 1
2

```


## @meta

Supported meta tags:
- `CollapsedDocStrings`: works similar to Documenter.jl. If provided, the docstrings in that page will be collapsed by default. Defaults to `false`. See the [Internal API](/devs/internal_api#internal_api) page for how the docstrings are displayed when this is set to `true`. Example usage:
  

**Input**

````
```@meta
CollapsedDocStrings = true
```
````


## @contents

Use this to create a list of content.

**Input**

````
```@contents
Pages = [
    "get_started.md",
    "documenter_to_vitepress_docs_example.md",
    "style_css.md",
    "code_example.md",
    "markdown-examples.md",
    "mime_examples.md",
    "citations.md",
    "style_css.md",
    "author_badge.md",
    "repo_stars.md",
    "../devs/render_pipeline.md",
    "../devs/internal_api.md",
    "../api.md"
    ]
Depth = 3
```
````


**Output**
- [Get Started](get_started#Get-Started)
    - [Simple method](get_started#Simple-method)
        - [Preview Documentation Development Instantly](get_started#Preview-Documentation-Development-Instantly)
    - [Advanced method](get_started#Advanced-method)
    - [Project structure](get_started#Project-structure)
    - [VitePress Installation](get_started#VitePress-Installation)
        - [Prerequisites](get_started#prerequisites)
    - [Build new docs from docs/src](get_started#Build-new-docs-from-docs/src)
    - [Setting up the Folder Structure](get_started#Setting-up-the-Folder-Structure)
- [Upgrading docs from Documenter.jl to DocumenterVitepress.jl](documenter_to_vitepress_docs_example#Upgrading-docs-from-Documenter.jl-to-DocumenterVitepress.jl)
- [Julia code examples](code_example#Julia-code-examples)
    - [@example](code_example#example)
    - [@ansi](code_example#ansi)
    - [@eval](code_example#eval)
    - [@repl](code_example#repl)
    - [@doctest](code_example#doctest)
    - [@meta](code_example#meta)
    - [@contents](code_example#contents)
- [Markdown Extension Examples](markdown-examples#Markdown-Extension-Examples)
    - [Syntax Highlighting](markdown-examples#Syntax-Highlighting)
        - [Line Highlight](markdown-examples#Line-Highlight)
        - [Highlight multiple lines](markdown-examples#Highlight-multiple-lines)
        - [Focus a line](markdown-examples#Focus-a-line)
        - [Focus multiple lines](markdown-examples#Focus-multiple-lines)
        - [Added and removed lines](markdown-examples#Added-and-removed-lines)
        - [Code error, code warning](markdown-examples#Code-error,-code-warning)
        - [Code groups](markdown-examples#Code-groups)
        - [Lists](markdown-examples#lists)
    - [Custom Containers](markdown-examples#Custom-Containers)
    - [Tabs](markdown-examples#tabs)
    - [Nested Tabs](markdown-examples#Nested-Tabs)
    - [GitHub flavored Alerts](markdown-examples#GitHub-flavored-Alerts)
    - [Tables](markdown-examples#tables)
    - [Equations](markdown-examples#equations)
    - [latex_symbols_in_headings](markdown-examples#latex_symbols_in_headings)
    - [Footnotes (citation style)](markdown-examples#Footnotes-(citation-style))
    - [Escaping characters](markdown-examples#Escaping-characters)
    - [[Heading with a link](https://github.com/LuxDL/DocumenterVitepress.jl) and *italic* font](markdown-examples#[Heading-with-a-link](https://github.com/LuxDL/DocumenterVitepress.jl)-and-*italic*-font)
    - [More](markdown-examples#more)
- [MIME type examples](mime_examples#MIME-type-examples)
- [DocumenterCitations.jl integration](citations#DocumenterCitations.jl-integration)
- [gallery](citations#gallery)
    - [numeric_style](citations#numeric_style)
    - [author_year_style](citations#author_year_style)
    - [alphabetic_style](citations#alphabetic_style)
    - [custom_styles](citations#custom_styles)
        - [Custom style: enumerated author year](citations#Custom-style:-enumerated-author-year)
        - [Custom style: Citation key labels](citations#Custom-style:-Citation-key-labels)
- [CSS Styling](style_css#CSS-Styling)
    - [Layout options](style_css#Layout-options)
    - [All available space](style_css#All-available-space)
    - [More](style_css#more)
- [AuthorBadge and platform icons](author_badge#AuthorBadge-and-platform-icons)
- [GitHub Icon with Stars](repo_stars#GitHub-Icon-with-Stars)
- [The rendering process](../devs/render_pipeline#The-rendering-process)
    - [Documenter.jl](../devs/render_pipeline#documenter-jl)
    - [VitePress](../devs/render_pipeline#vitepress)
    - [Finalization](../devs/render_pipeline#finalization)
- [internal_api](../devs/internal_api#internal_api)
- [Public API](../api#Public-API)

