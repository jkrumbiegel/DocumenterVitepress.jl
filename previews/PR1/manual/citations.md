
# DocumenterCitations.jl integration {#DocumenterCitations.jl-integration}

This page shows the DocumenterCitations.jl integration and what it looks like.  You can use DocumenterCitations in DocumenterVitepress in the same way that you use them in Documenter!

This page&#39;s source was taken from the DocumenterCitations docs and rendered via DocumenterVitepress.

# Citation Style Gallery {#gallery}

The citation style is determined when instantiating the `CitationBibliography`, via the `style` argument.

The built-in styles are:
- `style=:numeric` (default): [numeric style](/manual/citations#numeric_style)
  
- `style=:authoryear`: [author-year style](/manual/citations#author_year_style)
  
- `style=:alpha`: [alphabetic style](/manual/citations#alphabetic_style)
  

## Numeric style {#numeric_style}

This is the default style (`style=:numeric`) used throughout the other pages of this documentation, cf. the Syntax examples.
- `[GoerzQ2022](@cite)` renders as &quot;[[1](/manual/citations#GoerzQ2022)]&quot;
  
- `[FuerstNJP2014,SolaAAMOP2018](@cite)` renders as &quot;[[2](/manual/citations#FuerstNJP2014), [3](/manual/citations#SolaAAMOP2018)]&quot;
  
- `[GoerzQ2022](@citet)` renders as &quot;[Goerz _et al._ [1]](/manual/citations#GoerzQ2022)&quot;
  
- `[GoerzQ2022](@citep)` renders as &quot;[[1](/manual/citations#GoerzQ2022)]&quot; — `@citep` is the same as `@cite` for this style
  
- `[GoerzQ2022; Eq. (1)](@cite)` renders as &quot;[[1](/manual/citations#GoerzQ2022), Eq. (1)]&quot;
  
- `[GoerzQ2022; Eq. (1)](@citet)` renders as &quot;[Goerz _et al._ [1]](/manual/citations#GoerzQ2022), Eq. (1)&quot;
  
- `[GoerzQ2022](@citet*)` renders as &quot;[Goerz, Carrasco and Malinovsky [1]](/manual/citations#GoerzQ2022)&quot;
  
- `[GoerzQ2022; Eq. (1)](@citet*)` renders as &quot;[Goerz, Carrasco and Malinovsky [1]](/manual/citations#GoerzQ2022), Eq. (1)&quot;
  
- `[WinckelIP2008](@citet)` renders as &quot;[von Winckel and Borzì [4]](/manual/citations#WinckelIP2008)&quot;
  
- `[WinckelIP2008](@Citet)` renders as &quot;[Von Winckel and Borzì [4]](/manual/citations#WinckelIP2008)&quot;
  
- `[BrumerShapiro2003, BrifNJP2010, Shapiro2012, KochJPCM2016; and references therein](@cite)` renders as &quot;[[5](/manual/citations#BrumerShapiro2003)–[8](/manual/citations#KochJPCM2016), and references therein]&quot;
  
- `[BrumerShapiro2003, BrifNJP2010, Shapiro2012, KochJPCM2016; and references therein](@Citet)` renders as &quot;[Brumer and Shapiro [5]](/manual/citations#BrumerShapiro2003), [Brif _et al._ [6]](/manual/citations#BrifNJP2010), [Shapiro and Brumer [7]](/manual/citations#Shapiro2012), [Koch [8]](/manual/citations#KochJPCM2016), and references therein&quot;
  
- `[arbitrary text](@cite GoerzQ2022)` renders as &quot;[arbitrary text](/manual/citations#GoerzQ2022)&quot;
  

**References:**
1. <a id='GoerzQ2022'></a>
  M. H. Goerz, S. C. Carrasco and V. S. Malinovsky. _Quantum Optimal Control via Semi-Automatic Differentiation_. [Quantum **6**, 871](https://doi.org/10.22331/q-2022-12-07-871) (2022).
  
2. <a id='FuerstNJP2014'></a>
  H. A. Fürst, M. H. Goerz, U. G. Poschinger, M. Murphy, S. Montangero, T. Calarco, F. Schmidt-Kaler, K. Singer and C. P. Koch. _Controlling the transport of an ion: Classical and quantum mechanical solutions_. [New J. Phys. **16**, 075007](https://doi.org/10.1088/1367-2630/16/7/075007) (2014). Special issue on coherent control of complex quantum systems.
  
3. <a id='SolaAAMOP2018'></a>
  I. R. Sola, B. Y. Chang, S. A. Malinovskaya and V. S. Malinovsky. [_Quantum Control in Multilevel Systems_](https://doi.org/10.1016/bs.aamop.2018.02.003). In: _Advances In Atomic, Molecular, and Optical Physics_, Vol. 67, edited by E. Arimondo, L. F. DiMauro and S. F. Yelin (Academic Press, 2018); Chapter 3, pp. 151–256.
  
4. <a id='WinckelIP2008'></a>
  G. von Winckel and A. Borzì. _Computational techniques for a quantum control problem with H$^1$-cost_. [Inverse Problems **24**, 034007](https://doi.org/10.1088/0266-5611/24/3/034007) (2008).
  
5. <a id='BrumerShapiro2003'></a>
  P. Brumer and M. Shapiro. _Principles and Applications of the Quantum Control of Molecular Processes_ (Wiley Interscience, 2003).
  
6. <a id='BrifNJP2010'></a>
  C. Brif, R. Chakrabarti and H. Rabitz. _Control of quantum phenomena: past, present and future_. [New J. Phys. **12**, 075008](https://doi.org/10.1088/1367-2630/12/7/075008) (2010).
  
7. <a id='Shapiro2012'></a>
  M. Shapiro and P. Brumer. [_Quantum Control of Molecular Processes_](https://doi.org/10.1002/9783527639700). Second Edition (Wiley and Sons, 2012).
  
8. <a id='KochJPCM2016'></a>
  C. P. Koch. _Controlling open quantum systems: tools, achievements, and limitations_. [J. Phys.: Condens. Matter **28**, 213001](https://doi.org/10.1088/0953-8984/28/21/213001) (2016).
  

## Author-year style {#author_year_style}

The author-year style (`style=:authoryear`) formats citations with the author name and publication year. This is the citation style used, e.g., in [Rev. Mod. Phys.](https://journals.aps.org/rmp/) (`rmp` option in [REVTeX](https://www.ctan.org/tex-archive/macros/latex/contrib/revtex/auguide)). The bibliography is sorted alphabetically by author name. The default `@cite` command is parenthetical (`@cite` and `@citep` are equivalent) which is different from the `authoryear` style in [natbib](https://mirrors.rit.edu/CTAN/macros/latex/contrib/natbib/natnotes.pdf).
- `[GoerzQ2022](@cite)` renders as &quot;([Goerz _et al._, 2022](/manual/citations#GoerzQ2022))&quot;
  
- `[FuerstNJP2014,SolaAAMOP2018](@cite)` renders as &quot;([Fürst _et al._, 2014](/manual/citations#FuerstNJP2014); [Sola _et al._, 2018](/manual/citations#SolaAAMOP2018))&quot;
  
- `[GoerzQ2022](@citet)` renders as &quot;[Goerz _et al._ (2022)](/manual/citations#GoerzQ2022)&quot;
  
- `[GoerzQ2022](@citep)` renders as &quot;([Goerz _et al._, 2022](/manual/citations#GoerzQ2022))&quot; — `@citep` is the same as `@cite` for this style
  
- `[GoerzQ2022; Eq. (1)](@cite)` renders as &quot;([Goerz _et al._, 2022](/manual/citations#GoerzQ2022); Eq. (1))&quot;
  
- `[GoerzQ2022; Eq. (1)](@citet)` renders as &quot;[Goerz _et al._ (2022)](/manual/citations#GoerzQ2022), Eq. (1)&quot;
  
- `[GoerzQ2022](@cite*)` renders as &quot;([Goerz, Carrasco and Malinovsky, 2022](/manual/citations#GoerzQ2022))&quot;
  
- `[GoerzQ2022](@citet*)` renders as &quot;[Goerz, Carrasco and Malinovsky (2022)](/manual/citations#GoerzQ2022)&quot;
  
- `[GoerzQ2022; Eq. (1)](@cite*)` renders as &quot;([Goerz, Carrasco and Malinovsky, 2022](/manual/citations#GoerzQ2022); Eq. (1))&quot;
  
- `[GoerzQ2022; Eq. (1)](@citet*)` renders as &quot;[Goerz, Carrasco and Malinovsky (2022)](/manual/citations#GoerzQ2022), Eq. (1)&quot;
  
- `[WinckelIP2008](@citet)` renders as &quot;[von Winckel and Borzì (2008)](/manual/citations#WinckelIP2008)&quot;
  
- `[WinckelIP2008](@Citet)` renders as &quot;[Von Winckel and Borzì (2008)](/manual/citations#WinckelIP2008)&quot;
  
- `[BrumerShapiro2003, BrifNJP2010, Shapiro2012, KochJPCM2016; and references therein](@cite)` renders as &quot;([Brumer and Shapiro, 2003](/manual/citations#BrumerShapiro2003); [Brif _et al._, 2010](/manual/citations#BrifNJP2010); [Shapiro and Brumer, 2012](/manual/citations#Shapiro2012); [Koch, 2016](/manual/citations#KochJPCM2016); and references therein)&quot;
  
- `[BrumerShapiro2003, BrifNJP2010, Shapiro2012, KochJPCM2016; and references therein](@Citet)` renders as &quot;[Brumer and Shapiro (2003)](/manual/citations#BrumerShapiro2003), [Brif _et al._ (2010)](/manual/citations#BrifNJP2010), [Shapiro and Brumer (2012)](/manual/citations#Shapiro2012), [Koch (2016)](/manual/citations#KochJPCM2016), and references therein&quot;
  
- `[arbitrary text](@cite GoerzQ2022)` renders as &quot;[arbitrary text](/manual/citations#GoerzQ2022)&quot;
  

**References:**
- Brif, C.; Chakrabarti, R. and Rabitz, H. (2010). _Control of quantum phenomena: past, present and future_. [New J. Phys. **12**, 075008](https://doi.org/10.1088/1367-2630/12/7/075008).
  
- Brumer, P. and Shapiro, M. (2003). _Principles and Applications of the Quantum Control of Molecular Processes_ (Wiley Interscience).
  
- Fürst, H. A.; Goerz, M. H.; Poschinger, U. G.; Murphy, M.; Montangero, S.; Calarco, T.; Schmidt-Kaler, F.; Singer, K. and Koch, C. P. (2014). _Controlling the transport of an ion: Classical and quantum mechanical solutions_. [New J. Phys. **16**, 075007](https://doi.org/10.1088/1367-2630/16/7/075007). Special issue on coherent control of complex quantum systems.
  
- Goerz, M. H.; Carrasco, S. C. and Malinovsky, V. S. (2022). _Quantum Optimal Control via Semi-Automatic Differentiation_. [Quantum **6**, 871](https://doi.org/10.22331/q-2022-12-07-871).
  
- Koch, C. P. (2016). _Controlling open quantum systems: tools, achievements, and limitations_. [J. Phys.: Condens. Matter **28**, 213001](https://doi.org/10.1088/0953-8984/28/21/213001).
  
- Shapiro, M. and Brumer, P. (2012). [_Quantum Control of Molecular Processes_](https://doi.org/10.1002/9783527639700). Second Edition (Wiley and Sons).
  
- Sola, I. R.; Chang, B. Y.; Malinovskaya, S. A. and Malinovsky, V. S. (2018). [_Quantum Control in Multilevel Systems_](https://doi.org/10.1016/bs.aamop.2018.02.003). In: _Advances In Atomic, Molecular, and Optical Physics_, Vol. 67, edited by Arimondo, E.; DiMauro, L. F. and Yelin, S. F. (Academic Press); Chapter 3, pp. 151–256.
  
- von Winckel, G. and Borzì, A. (2008). _Computational techniques for a quantum control problem with H$^1$-cost_. [Inverse Problems **24**, 034007](https://doi.org/10.1088/0266-5611/24/3/034007).
  

## Alphabetic style {#alphabetic_style}

The `style=:alpha` formats citations and references like `:numeric`, except that it uses labels derived from the author names and publication year and sorts the references alphabetically.
- `[GoerzQ2022](@cite)` renders as &quot;[[GCM22](/manual/citations#GoerzQ2022)]&quot;
  
- `[FuerstNJP2014,SolaAAMOP2018](@cite)` renders as &quot;[[FGP+14](/manual/citations#FuerstNJP2014), [SCMM18](/manual/citations#SolaAAMOP2018)]&quot;
  
- `[GoerzQ2022](@citet)` renders as &quot;[Goerz _et al._ [GCM22]](/manual/citations#GoerzQ2022)&quot;
  
- `[GoerzQ2022](@citep)` renders as &quot;[[GCM22](/manual/citations#GoerzQ2022)]&quot; — `@citep` is the same as `@cite` for this style
  
- `[GoerzQ2022; Eq. (1)](@cite)` renders as &quot;[[GCM22](/manual/citations#GoerzQ2022), Eq. (1)]&quot;
  
- `[GoerzQ2022; Eq. (1)](@citet)` renders as &quot;[Goerz _et al._ [GCM22]](/manual/citations#GoerzQ2022), Eq. (1)&quot;
  
- `[GoerzQ2022](@citet*)` renders as &quot;[Goerz, Carrasco and Malinovsky [GCM22]](/manual/citations#GoerzQ2022)&quot;
  
- `[GoerzQ2022; Eq. (1)](@citet*)` renders as &quot;[Goerz, Carrasco and Malinovsky [GCM22]](/manual/citations#GoerzQ2022), Eq. (1)&quot;
  
- `[WinckelIP2008](@citet)` renders as &quot;[von Winckel and Borzì [vWB08]](/manual/citations#WinckelIP2008)&quot;
  
- `[WinckelIP2008](@Citet)` renders as &quot;[Von Winckel and Borzì [vWB08]](/manual/citations#WinckelIP2008)&quot;
  
- `[BrumerShapiro2003, BrifNJP2010, Shapiro2012, KochJPCM2016; and references therein](@cite)` renders as &quot;[[BS03](/manual/citations#BrumerShapiro2003), [BCR10](/manual/citations#BrifNJP2010), [SB12](/manual/citations#Shapiro2012), [Koc16](/manual/citations#KochJPCM2016), and references therein]&quot;. Note that unlike for `style=:numeric`, the citations are not compressed.
  
- `[BrumerShapiro2003, BrifNJP2010, Shapiro2012, KochJPCM2016; and references therein](@Citet)` renders as &quot;[Brumer and Shapiro [BS03]](/manual/citations#BrumerShapiro2003), [Brif _et al._ [BCR10]](/manual/citations#BrifNJP2010), [Shapiro and Brumer [SB12]](/manual/citations#Shapiro2012), [Koch [Koc16]](/manual/citations#KochJPCM2016), and references therein&quot;
  
- `[arbitrary text](@cite GoerzQ2022)` renders as &quot;[arbitrary text](/manual/citations#GoerzQ2022)&quot;
  

**References:**
1. C. Brif, R. Chakrabarti and H. Rabitz. _Control of quantum phenomena: past, present and future_. [New J. Phys. **12**, 075008](https://doi.org/10.1088/1367-2630/12/7/075008) (2010).
  
2. P. Brumer and M. Shapiro. _Principles and Applications of the Quantum Control of Molecular Processes_ (Wiley Interscience, 2003).
  
3. H. A. Fürst, M. H. Goerz, U. G. Poschinger, M. Murphy, S. Montangero, T. Calarco, F. Schmidt-Kaler, K. Singer and C. P. Koch. _Controlling the transport of an ion: Classical and quantum mechanical solutions_. [New J. Phys. **16**, 075007](https://doi.org/10.1088/1367-2630/16/7/075007) (2014). Special issue on coherent control of complex quantum systems.
  
4. M. H. Goerz, S. C. Carrasco and V. S. Malinovsky. _Quantum Optimal Control via Semi-Automatic Differentiation_. [Quantum **6**, 871](https://doi.org/10.22331/q-2022-12-07-871) (2022).
  
5. C. P. Koch. _Controlling open quantum systems: tools, achievements, and limitations_. [J. Phys.: Condens. Matter **28**, 213001](https://doi.org/10.1088/0953-8984/28/21/213001) (2016).
  
6. M. Shapiro and P. Brumer. [_Quantum Control of Molecular Processes_](https://doi.org/10.1002/9783527639700). Second Edition (Wiley and Sons, 2012).
  
7. I. R. Sola, B. Y. Chang, S. A. Malinovskaya and V. S. Malinovsky. [_Quantum Control in Multilevel Systems_](https://doi.org/10.1016/bs.aamop.2018.02.003). In: _Advances In Atomic, Molecular, and Optical Physics_, Vol. 67, edited by E. Arimondo, L. F. DiMauro and S. F. Yelin (Academic Press, 2018); Chapter 3, pp. 151–256.
  
8. G. von Winckel and A. Borzì. _Computational techniques for a quantum control problem with H$^1$-cost_. [Inverse Problems **24**, 034007](https://doi.org/10.1088/0266-5611/24/3/034007) (2008).
  

Note that the `:alpha` style is able to automatically disambiguate labels:
1. M. Grace, C. Brif, H. Rabitz, I. A. Walmsley, R. L. Kosut and D. A. Lidar. _Optimal control of quantum gates and suppression of decoherence in a system of interacting two-level particles_. [J. Phys. B **40**, S103](https://doi.org/10.1088/0953-4075/40/9/s06) (2007), [arXiv:quant-ph/0702147](https://arxiv.org/abs/quant-ph/0702147).
  
2. M. D. Grace, C. Brif, H. Rabitz, D. A. Lidar, I. A. Walmsley and R. L. Kosut. _Fidelity of optimally controlled quantum gates with randomly coupled multiparticle environments_. [J. Mod. Opt. **54**, 2339](https://doi.org/10.1080/09500340701639615) (2007), [arXiv:0712.2935](https://arxiv.org/abs/0712.2935).
  

This works because the `DocumenterCitations` plugin automatically upgrades `style=:alpha` to the internal

```
DocumenterCitations.AlphaStyle
```


## Custom styles {#custom_styles}

In the following, we show two examples for user-defined styles. See the notes on customization on how to generally define a custom style.

### Custom style: enumerated author-year {#Custom-style:-enumerated-author-year}

In this example, the `:authoryear` style is used, but the references are shown in an enumerated list.

The important part of the definition is in the last line, indicating that the References should be shown as an enumeration (ordered list, `<ol>`, in HTML), see below. Meanwhile, citations render exactly as with `style=:authoryear`:
- `[GoerzQ2022](@cite)` renders as &quot;([Goerz _et al._, 2022](/manual/citations#GoerzQ2022))&quot;
  
- `[FuerstNJP2014,SolaAAMOP2018](@cite)` renders as &quot;([Fürst _et al._, 2014](/manual/citations#FuerstNJP2014); [Sola _et al._, 2018](/manual/citations#SolaAAMOP2018))&quot;
  
- `[WinckelIP2008](@Citet)` renders as &quot;[Von Winckel and Borzì (2008)](/manual/citations#WinckelIP2008)&quot;
  

**References:**
1. Brif, C.; Chakrabarti, R. and Rabitz, H. (2010). _Control of quantum phenomena: past, present and future_. [New J. Phys. **12**, 075008](https://doi.org/10.1088/1367-2630/12/7/075008).
  
2. Brumer, P. and Shapiro, M. (2003). _Principles and Applications of the Quantum Control of Molecular Processes_ (Wiley Interscience).
  
3. Fürst, H. A.; Goerz, M. H.; Poschinger, U. G.; Murphy, M.; Montangero, S.; Calarco, T.; Schmidt-Kaler, F.; Singer, K. and Koch, C. P. (2014). _Controlling the transport of an ion: Classical and quantum mechanical solutions_. [New J. Phys. **16**, 075007](https://doi.org/10.1088/1367-2630/16/7/075007). Special issue on coherent control of complex quantum systems.
  
4. Goerz, M. H.; Carrasco, S. C. and Malinovsky, V. S. (2022). _Quantum Optimal Control via Semi-Automatic Differentiation_. [Quantum **6**, 871](https://doi.org/10.22331/q-2022-12-07-871).
  
5. Koch, C. P. (2016). _Controlling open quantum systems: tools, achievements, and limitations_. [J. Phys.: Condens. Matter **28**, 213001](https://doi.org/10.1088/0953-8984/28/21/213001).
  
6. Shapiro, M. and Brumer, P. (2012). [_Quantum Control of Molecular Processes_](https://doi.org/10.1002/9783527639700). Second Edition (Wiley and Sons).
  
7. Sola, I. R.; Chang, B. Y.; Malinovskaya, S. A. and Malinovsky, V. S. (2018). [_Quantum Control in Multilevel Systems_](https://doi.org/10.1016/bs.aamop.2018.02.003). In: _Advances In Atomic, Molecular, and Optical Physics_, Vol. 67, edited by Arimondo, E.; DiMauro, L. F. and Yelin, S. F. (Academic Press); Chapter 3, pp. 151–256.
  
8. Von Winckel, G. and Borzì, A. (2008). _Computational techniques for a quantum control problem with H$^1$-cost_. [Inverse Problems **24**, 034007](https://doi.org/10.1088/0266-5611/24/3/034007).
  

### Custom style: Citation-key labels {#Custom-style:-Citation-key-labels}

In this less trivial example, a style similar to `:alpha` is used, using the citation keys in the `.bib` file as labels. This would be somewhat more appropriate with citation keys that are shorter that the ones used here (keys similar to those automatically generated with the `:alpha` style).
- `[GoerzQ2022](@cite)` renders as &quot;[[GoerzQ2022](/manual/citations#GoerzQ2022)]&quot;
  
- `[FuerstNJP2014,SolaAAMOP2018](@cite)` renders as &quot;[[FuerstNJP2014](/manual/citations#FuerstNJP2014), [SolaAAMOP2018](/manual/citations#SolaAAMOP2018)]&quot;
  
- `[GoerzQ2022](@citet)` renders as &quot;[Goerz _et al._ [GoerzQ2022]](/manual/citations#GoerzQ2022)&quot;
  
- `[GoerzQ2022](@citep)` renders as &quot;[[GoerzQ2022](/manual/citations#GoerzQ2022)]&quot; — `@citep` is the same as `@cite` for this style
  
- `[GoerzQ2022; Eq. (1)](@cite)` renders as &quot;[[GoerzQ2022](/manual/citations#GoerzQ2022), Eq. (1)]&quot;
  
- `[GoerzQ2022; Eq. (1)](@citet)` renders as &quot;[Goerz _et al._ [GoerzQ2022]](/manual/citations#GoerzQ2022), Eq. (1)&quot;
  
- `[GoerzQ2022](@citet*)` renders as &quot;[Goerz, Carrasco and Malinovsky [GoerzQ2022]](/manual/citations#GoerzQ2022)&quot;
  
- `[GoerzQ2022; Eq. (1)](@citet*)` renders as &quot;[Goerz, Carrasco and Malinovsky [GoerzQ2022]](/manual/citations#GoerzQ2022), Eq. (1)&quot;
  
- `[WinckelIP2008](@citet)` renders as &quot;[von Winckel and Borzì [WinckelIP2008]](/manual/citations#WinckelIP2008)&quot;
  
- `[WinckelIP2008](@Citet)` renders as &quot;[Von Winckel and Borzì [WinckelIP2008]](/manual/citations#WinckelIP2008)&quot;
  
- `[arbitrary text](@cite GoerzQ2022)` renders as &quot;[arbitrary text](/manual/citations#GoerzQ2022)&quot;
  

**References:**
1. C. Brif, R. Chakrabarti and H. Rabitz. _Control of quantum phenomena: past, present and future_. [New J. Phys. **12**, 075008](https://doi.org/10.1088/1367-2630/12/7/075008) (2010).
  
2. P. Brumer and M. Shapiro. _Principles and Applications of the Quantum Control of Molecular Processes_ (Wiley Interscience, 2003).
  
3. H. A. Fürst, M. H. Goerz, U. G. Poschinger, M. Murphy, S. Montangero, T. Calarco, F. Schmidt-Kaler, K. Singer and C. P. Koch. _Controlling the transport of an ion: Classical and quantum mechanical solutions_. [New J. Phys. **16**, 075007](https://doi.org/10.1088/1367-2630/16/7/075007) (2014). Special issue on coherent control of complex quantum systems.
  
4. M. H. Goerz, S. C. Carrasco and V. S. Malinovsky. _Quantum Optimal Control via Semi-Automatic Differentiation_. [Quantum **6**, 871](https://doi.org/10.22331/q-2022-12-07-871) (2022).
  
5. C. P. Koch. _Controlling open quantum systems: tools, achievements, and limitations_. [J. Phys.: Condens. Matter **28**, 213001](https://doi.org/10.1088/0953-8984/28/21/213001) (2016).
  
6. M. Shapiro and P. Brumer. [_Quantum Control of Molecular Processes_](https://doi.org/10.1002/9783527639700). Second Edition (Wiley and Sons, 2012).
  
7. I. R. Sola, B. Y. Chang, S. A. Malinovskaya and V. S. Malinovsky. [_Quantum Control in Multilevel Systems_](https://doi.org/10.1016/bs.aamop.2018.02.003). In: _Advances In Atomic, Molecular, and Optical Physics_, Vol. 67, edited by E. Arimondo, L. F. DiMauro and S. F. Yelin (Academic Press, 2018); Chapter 3, pp. 151–256.
  
8. G. von Winckel and A. Borzì. _Computational techniques for a quantum control problem with H$^1$-cost_. [Inverse Problems **24**, 034007](https://doi.org/10.1088/0266-5611/24/3/034007) (2008).
  
