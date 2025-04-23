
# MIME-type examples {#MIME-type-examples}

This file tests the output for all available MIME-types.

```julia
"""
    MediaOutput{MIME"..."}(contents::String)

A struct representing media output with a specific MIME type.

# Fields
- `contents::String`: The contents of the media output.
"""
struct MediaOutput{MimeType}
    contents::Vector{UInt8}
end
MediaOutput{MimeType}(contents::String) where MimeType = MediaOutput{MimeType}(Vector{UInt8}(contents))
# This defines the show method for the target MIME type only!
Base.show(io, ::MimeType, media::MediaOutput{MimeType}) where MimeType = write(io, media.contents)
# MediaOutput{MIME"text/plain"}("Hello there!")
```


PNG images that carry pixel density metadata will be shown at the correct size. This is a plot rendered at high pixel density which does not carry dpi metadata.

```julia
using DocumenterVitepress
MediaOutput{MIME"image/png"}(read(joinpath(pathof(DocumenterVitepress) |> dirname |> dirname, "docs", "src", "assets", "plot_without_dpi.png")))
```

![](jjebszx.png){width=832px height=602px}

And this is the same plot but with dpi metadata embedded. DocumenterVitepress annotates the corrected size in its Markdown output.

```julia
using DocumenterVitepress
MediaOutput{MIME"image/png"}(read(joinpath(pathof(DocumenterVitepress) |> dirname |> dirname, "docs", "src", "assets", "plot_with_dpi.png")))
```

![](joqqrkp.png){width=416px height=301px}

```julia
MediaOutput{MIME"image/jpeg"}(read(download("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/519px-Felis_silvestris_silvestris.jpg")))
```

![](aakaohd.jpeg)

Vite automatically inlines assets under 4KB by default, if this causes issues with your SVG files you can disable this behavior by adding the following to your vitepress configuration:

::: info config.mts

```
vite: {
    build: {
        assetsInlineLimit: 0, // so we can tell whether we have created inlined images or not, we don't let vite inline them
    }
},
```


:::

```julia
MediaOutput{MIME"image/svg+xml"}("https://upload.wikimedia.org/wikipedia/commons/6/6c/SVG_Simple_Icon.svg" |> download |> read)
```

![](nrgtisc.svg)

```julia
MediaOutput{MIME"image/gif"}(read(download("https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif")))
```

![](eespjfv.gif)

```julia
HTML(raw"""
<div style="width: 100px; height: 100px; background-color: black;"
     onmousemove="let r = Math.round(event.offsetX / 100 * 255);
                  let b = Math.round((100 - event.offsetY) / 100 * 255);
                  this.style.backgroundColor = `rgb(${r}, 0, ${b})`;">
</div>
""")
```

<div v-html="`&lt;div style=&quot;width: 100px; height: 100px; background-color: black;&quot;&#10;     onmousemove=&quot;let r = Math.round(event.offsetX / 100 * 255);&#10;                  let b = Math.round((100 - event.offsetY) / 100 * 255);&#10;                  this.style.backgroundColor = \`rgb(\${r}, 0, \${b})\`;&quot;&gt;&#10;&lt;/div&gt;&#10;`"></div>
