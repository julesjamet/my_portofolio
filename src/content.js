// Importing images from assets

import html from './assets/images/html.png';
import css from './assets/images/css.png';
import js from './assets/images/js.png';

import liquid from './assets/images/liquid.png';

import zamzam from './assets/images/zamzam.png';
import woudz from './assets/images/woudz.png';
import judicael from './assets/images/judicael.png';
import madariss from './assets/images/madariss.png';
import shopify from './assets/images/shopify.png';
import bootstrap from './assets/images/bootstrap.png';

// Your summary and Greeting Section

const greeting = {
    username: "Jules JAMET",
    title: "Full Stack Developer",
    subtitle: "A passionate Software Developer with experience in building Web and Mobile applications; using Ruby on Rails / JavaScript / React.js and some other cool libraries / frameworks.",
    resumeLink: '',
}

const navBar = [
    {
        title : 'Skills',
        link : '#skills'
    },
    {
        title : 'Open Source',
        link : '#open_source'
    },
    {
        title : 'Projects',
        link : '#clients_projects'
    },
    {
        title : 'Contact Me',
        link : '#contact_me'
    }
]

const skillsSection =  {
    title: 'What I do',
    subtitle: "crazy full stack developer who wants to explore every tech stack",
    // softwareSkills : [ 'html', 'css', 'js', 'ruby', 'ror', 'react' , 'sql', 'graphql'],
    softwareSkills : [
        {
            name : 'ReactJs',
            tag : `<ReactJs color="#61DAFB" size={50} />`
        },
    ]

}

const socialMedias = [
    {
        fontawesomeClassname : 'github',
        link : 'https://github.com/julesjamet',
        color : "#000000"
    },
    {
        fontawesomeClassname : 'google',
        link : 'mailto:jules.jamet@gmail.com',
        color : "#e34137"
    },
    {
        fontawesomeClassname : 'facebook',
        link : 'https://www.facebook.com/jules.jamet',
        color : "#3b5998"
    },
    {
        fontawesomeClassname : 'facebook-messenger',
        link : 'https://m.me/jules.jamet',
        color : "#3698f8"
    },
    {
        fontawesomeClassname : 'linkedin-in',
        link : 'https://www.linkedin.com/in/jules-jamet-224b36170/',
        color : '#2a7fb7'
    },
]

const Projects = [
    {
        title : "zamzamjewels.com",
        desc : "I will write something after to describe what I have done inside this project",
        imgProject : zamzam,
        skills : {
            
            },
    },
    {
        title : "madarissibnmashish.com",
        desc : "I will write something after to describe what I have done inside this project",
        imgProject : madariss,
        skills : [
            {
                name : 'bootstrap',
                img : bootstrap
            },
            {
                name : 'html',
                img : html
            },
            {
                name : 'css',
                img : css
            },
            {
                name : 'js',
                img : js
            }
        ]
    },
    {
        title : "woudz.com",
        desc : "I will write something after to describe what I have done inside this project",
        imgProject : woudz,
        skills : [
            {
                name : 'bootstrap',
                img : bootstrap
            },
            {
                name : 'html',
                img : html
            },
            {
                name : 'css',
                img : css
            },
            {
                name : 'js',
                img : js
            }
        ]
    },
    {
        title : "judicael-sacred-skulls.myshopify.com",
        desc : "I will write something after to describe what I have done inside this project",
        imgProject : judicael,
        skills : [
            {
                name : 'shopify',
                img : shopify
            },
            {
                name : 'liquid',
                img : liquid
            },
            {
                name : 'html',
                img : html
            },
            {
                name : 'css',
                img : css
            },
            {
                name : 'js',
                img : js
            }
        ]
    }
]

const githubColors = {
        "1C Enterprise": {
            "color": "#814CCC",
            "url": "https://github.com/trending?l=1C-Enterprise"
        },
        "4D": {
            "color": null,
            "url": "https://github.com/trending?l=4D"
        },
        "ABAP": {
            "color": "#E8274B",
            "url": "https://github.com/trending?l=ABAP"
        },
        "ActionScript": {
            "color": "#882B0F",
            "url": "https://github.com/trending?l=ActionScript"
        },
        "Ada": {
            "color": "#02f88c",
            "url": "https://github.com/trending?l=Ada"
        },
        "Agda": {
            "color": "#315665",
            "url": "https://github.com/trending?l=Agda"
        },
        "AGS Script": {
            "color": "#B9D9FF",
            "url": "https://github.com/trending?l=AGS-Script"
        },
        "AL": {
            "color": "#3AA2B5",
            "url": "https://github.com/trending?l=AL"
        },
        "Alloy": {
            "color": "#64C800",
            "url": "https://github.com/trending?l=Alloy"
        },
        "Alpine Abuild": {
            "color": null,
            "url": "https://github.com/trending?l=Alpine-Abuild"
        },
        "AMPL": {
            "color": "#E6EFBB",
            "url": "https://github.com/trending?l=AMPL"
        },
        "AngelScript": {
            "color": "#C7D7DC",
            "url": "https://github.com/trending?l=AngelScript"
        },
        "ANTLR": {
            "color": "#9DC3FF",
            "url": "https://github.com/trending?l=ANTLR"
        },
        "Apex": {
            "color": "#1797c0",
            "url": "https://github.com/trending?l=Apex"
        },
        "API Blueprint": {
            "color": "#2ACCA8",
            "url": "https://github.com/trending?l=API-Blueprint"
        },
        "APL": {
            "color": "#5A8164",
            "url": "https://github.com/trending?l=APL"
        },
        "Apollo Guidance Computer": {
            "color": "#0B3D91",
            "url": "https://github.com/trending?l=Apollo-Guidance-Computer"
        },
        "AppleScript": {
            "color": "#101F1F",
            "url": "https://github.com/trending?l=AppleScript"
        },
        "Arc": {
            "color": "#aa2afe",
            "url": "https://github.com/trending?l=Arc"
        },
        "ASL": {
            "color": null,
            "url": "https://github.com/trending?l=ASL"
        },
        "ASP.NET": {
            "color": "#9400ff",
            "url": "https://github.com/trending?l=ASP.NET"
        },
        "AspectJ": {
            "color": "#a957b0",
            "url": "https://github.com/trending?l=AspectJ"
        },
        "Assembly": {
            "color": "#6E4C13",
            "url": "https://github.com/trending?l=Assembly"
        },
        "Asymptote": {
            "color": "#ff0000",
            "url": "https://github.com/trending?l=Asymptote"
        },
        "ATS": {
            "color": "#1ac620",
            "url": "https://github.com/trending?l=ATS"
        },
        "Augeas": {
            "color": null,
            "url": "https://github.com/trending?l=Augeas"
        },
        "AutoHotkey": {
            "color": "#6594b9",
            "url": "https://github.com/trending?l=AutoHotkey"
        },
        "AutoIt": {
            "color": "#1C3552",
            "url": "https://github.com/trending?l=AutoIt"
        },
        "Awk": {
            "color": null,
            "url": "https://github.com/trending?l=Awk"
        },
        "Ballerina": {
            "color": "#FF5000",
            "url": "https://github.com/trending?l=Ballerina"
        },
        "Batchfile": {
            "color": "#C1F12E",
            "url": "https://github.com/trending?l=Batchfile"
        },
        "Befunge": {
            "color": null,
            "url": "https://github.com/trending?l=Befunge"
        },
        "Bison": {
            "color": "#6A463F",
            "url": "https://github.com/trending?l=Bison"
        },
        "BitBake": {
            "color": null,
            "url": "https://github.com/trending?l=BitBake"
        },
        "Blade": {
            "color": "#f7523f",
            "url": "https://github.com/trending?l=Blade"
        },
        "BlitzBasic": {
            "color": null,
            "url": "https://github.com/trending?l=BlitzBasic"
        },
        "BlitzMax": {
            "color": "#cd6400",
            "url": "https://github.com/trending?l=BlitzMax"
        },
        "Bluespec": {
            "color": null,
            "url": "https://github.com/trending?l=Bluespec"
        },
        "Boo": {
            "color": "#d4bec1",
            "url": "https://github.com/trending?l=Boo"
        },
        "Brainfuck": {
            "color": "#2F2530",
            "url": "https://github.com/trending?l=Brainfuck"
        },
        "Brightscript": {
            "color": null,
            "url": "https://github.com/trending?l=Brightscript"
        },
        "C": {
            "color": "#555555",
            "url": "https://github.com/trending?l=C"
        },
        "C#": {
            "color": "#178600",
            "url": "https://github.com/trending?l=Csharp"
        },
        "C++": {
            "color": "#f34b7d",
            "url": "https://github.com/trending?l=C++"
        },
        "C2hs Haskell": {
            "color": null,
            "url": "https://github.com/trending?l=C2hs-Haskell"
        },
        "Cap'n Proto": {
            "color": null,
            "url": "https://github.com/trending?l=Cap'n-Proto"
        },
        "CartoCSS": {
            "color": null,
            "url": "https://github.com/trending?l=CartoCSS"
        },
        "Ceylon": {
            "color": "#dfa535",
            "url": "https://github.com/trending?l=Ceylon"
        },
        "Chapel": {
            "color": "#8dc63f",
            "url": "https://github.com/trending?l=Chapel"
        },
        "Charity": {
            "color": null,
            "url": "https://github.com/trending?l=Charity"
        },
        "ChucK": {
            "color": null,
            "url": "https://github.com/trending?l=ChucK"
        },
        "Cirru": {
            "color": "#ccccff",
            "url": "https://github.com/trending?l=Cirru"
        },
        "Clarion": {
            "color": "#db901e",
            "url": "https://github.com/trending?l=Clarion"
        },
        "Classic ASP": {
            "color": "#6a40fd",
            "url": "https://github.com/trending?l=Classic-ASP"
        },
        "Clean": {
            "color": "#3F85AF",
            "url": "https://github.com/trending?l=Clean"
        },
        "Click": {
            "color": "#E4E6F3",
            "url": "https://github.com/trending?l=Click"
        },
        "CLIPS": {
            "color": null,
            "url": "https://github.com/trending?l=CLIPS"
        },
        "Clojure": {
            "color": "#db5855",
            "url": "https://github.com/trending?l=Clojure"
        },
        "CMake": {
            "color": null,
            "url": "https://github.com/trending?l=CMake"
        },
        "COBOL": {
            "color": null,
            "url": "https://github.com/trending?l=COBOL"
        },
        "CodeQL": {
            "color": null,
            "url": "https://github.com/trending?l=CodeQL"
        },
        "CoffeeScript": {
            "color": "#244776",
            "url": "https://github.com/trending?l=CoffeeScript"
        },
        "ColdFusion": {
            "color": "#ed2cd6",
            "url": "https://github.com/trending?l=ColdFusion"
        },
        "ColdFusion CFC": {
            "color": "#ed2cd6",
            "url": "https://github.com/trending?l=ColdFusion-CFC"
        },
        "Common Lisp": {
            "color": "#3fb68b",
            "url": "https://github.com/trending?l=Common-Lisp"
        },
        "Common Workflow Language": {
            "color": "#B5314C",
            "url": "https://github.com/trending?l=Common-Workflow-Language"
        },
        "Component Pascal": {
            "color": "#B0CE4E",
            "url": "https://github.com/trending?l=Component-Pascal"
        },
        "Cool": {
            "color": null,
            "url": "https://github.com/trending?l=Cool"
        },
        "Coq": {
            "color": null,
            "url": "https://github.com/trending?l=Coq"
        },
        "Crystal": {
            "color": "#000100",
            "url": "https://github.com/trending?l=Crystal"
        },
        "CSON": {
            "color": "#244776",
            "url": "https://github.com/trending?l=CSON"
        },
        "Csound": {
            "color": null,
            "url": "https://github.com/trending?l=Csound"
        },
        "Csound Document": {
            "color": null,
            "url": "https://github.com/trending?l=Csound-Document"
        },
        "Csound Score": {
            "color": null,
            "url": "https://github.com/trending?l=Csound-Score"
        },
        "CSS": {
            "color": "#563d7c",
            "url": "https://github.com/trending?l=CSS"
        },
        "Cuda": {
            "color": "#3A4E3A",
            "url": "https://github.com/trending?l=Cuda"
        },
        "CWeb": {
            "color": null,
            "url": "https://github.com/trending?l=CWeb"
        },
        "Cycript": {
            "color": null,
            "url": "https://github.com/trending?l=Cycript"
        },
        "Cython": {
            "color": null,
            "url": "https://github.com/trending?l=Cython"
        },
        "D": {
            "color": "#ba595e",
            "url": "https://github.com/trending?l=D"
        },
        "Dafny": {
            "color": "#FFEC25",
            "url": "https://github.com/trending?l=Dafny"
        },
        "Dart": {
            "color": "#00B4AB",
            "url": "https://github.com/trending?l=Dart"
        },
        "DataWeave": {
            "color": "#003a52",
            "url": "https://github.com/trending?l=DataWeave"
        },
        "Dhall": {
            "color": "#dfafff",
            "url": "https://github.com/trending?l=Dhall"
        },
        "DIGITAL Command Language": {
            "color": null,
            "url": "https://github.com/trending?l=DIGITAL-Command-Language"
        },
        "DM": {
            "color": "#447265",
            "url": "https://github.com/trending?l=DM"
        },
        "Dockerfile": {
            "color": "#384d54",
            "url": "https://github.com/trending?l=Dockerfile"
        },
        "Dogescript": {
            "color": "#cca760",
            "url": "https://github.com/trending?l=Dogescript"
        },
        "DTrace": {
            "color": null,
            "url": "https://github.com/trending?l=DTrace"
        },
        "Dylan": {
            "color": "#6c616e",
            "url": "https://github.com/trending?l=Dylan"
        },
        "E": {
            "color": "#ccce35",
            "url": "https://github.com/trending?l=E"
        },
        "eC": {
            "color": "#913960",
            "url": "https://github.com/trending?l=eC"
        },
        "ECL": {
            "color": "#8a1267",
            "url": "https://github.com/trending?l=ECL"
        },
        "ECLiPSe": {
            "color": null,
            "url": "https://github.com/trending?l=ECLiPSe"
        },
        "Eiffel": {
            "color": "#4d6977",
            "url": "https://github.com/trending?l=Eiffel"
        },
        "EJS": {
            "color": "#a91e50",
            "url": "https://github.com/trending?l=EJS"
        },
        "Elixir": {
            "color": "#6e4a7e",
            "url": "https://github.com/trending?l=Elixir"
        },
        "Elm": {
            "color": "#60B5CC",
            "url": "https://github.com/trending?l=Elm"
        },
        "Emacs Lisp": {
            "color": "#c065db",
            "url": "https://github.com/trending?l=Emacs-Lisp"
        },
        "EmberScript": {
            "color": "#FFF4F3",
            "url": "https://github.com/trending?l=EmberScript"
        },
        "EQ": {
            "color": "#a78649",
            "url": "https://github.com/trending?l=EQ"
        },
        "Erlang": {
            "color": "#B83998",
            "url": "https://github.com/trending?l=Erlang"
        },
        "F#": {
            "color": "#b845fc",
            "url": "https://github.com/trending?l=Fsharp"
        },
        "F*": {
            "color": "#572e30",
            "url": "https://github.com/trending?l=F*"
        },
        "Factor": {
            "color": "#636746",
            "url": "https://github.com/trending?l=Factor"
        },
        "Fancy": {
            "color": "#7b9db4",
            "url": "https://github.com/trending?l=Fancy"
        },
        "Fantom": {
            "color": "#14253c",
            "url": "https://github.com/trending?l=Fantom"
        },
        "Faust": {
            "color": "#c37240",
            "url": "https://github.com/trending?l=Faust"
        },
        "Filebench WML": {
            "color": null,
            "url": "https://github.com/trending?l=Filebench-WML"
        },
        "Filterscript": {
            "color": null,
            "url": "https://github.com/trending?l=Filterscript"
        },
        "fish": {
            "color": null,
            "url": "https://github.com/trending?l=fish"
        },
        "FLUX": {
            "color": "#88ccff",
            "url": "https://github.com/trending?l=FLUX"
        },
        "Forth": {
            "color": "#341708",
            "url": "https://github.com/trending?l=Forth"
        },
        "Fortran": {
            "color": "#4d41b1",
            "url": "https://github.com/trending?l=Fortran"
        },
        "Fortran Free Form": {
            "color": null,
            "url": "https://github.com/trending?l=Fortran-Free-Form"
        },
        "FreeMarker": {
            "color": "#0050b2",
            "url": "https://github.com/trending?l=FreeMarker"
        },
        "Frege": {
            "color": "#00cafe",
            "url": "https://github.com/trending?l=Frege"
        },
        "Futhark": {
            "color": "#5f021f",
            "url": "https://github.com/trending?l=Futhark"
        },
        "G-code": {
            "color": "#D08CF2",
            "url": "https://github.com/trending?l=G-code"
        },
        "Game Maker Language": {
            "color": "#71b417",
            "url": "https://github.com/trending?l=Game-Maker-Language"
        },
        "GAML": {
            "color": "#FFC766",
            "url": "https://github.com/trending?l=GAML"
        },
        "GAMS": {
            "color": null,
            "url": "https://github.com/trending?l=GAMS"
        },
        "GAP": {
            "color": null,
            "url": "https://github.com/trending?l=GAP"
        },
        "GCC Machine Description": {
            "color": null,
            "url": "https://github.com/trending?l=GCC-Machine-Description"
        },
        "GDB": {
            "color": null,
            "url": "https://github.com/trending?l=GDB"
        },
        "GDScript": {
            "color": "#355570",
            "url": "https://github.com/trending?l=GDScript"
        },
        "Genie": {
            "color": "#fb855d",
            "url": "https://github.com/trending?l=Genie"
        },
        "Genshi": {
            "color": null,
            "url": "https://github.com/trending?l=Genshi"
        },
        "Gentoo Ebuild": {
            "color": null,
            "url": "https://github.com/trending?l=Gentoo-Ebuild"
        },
        "Gentoo Eclass": {
            "color": null,
            "url": "https://github.com/trending?l=Gentoo-Eclass"
        },
        "Gherkin": {
            "color": "#5B2063",
            "url": "https://github.com/trending?l=Gherkin"
        },
        "GLSL": {
            "color": null,
            "url": "https://github.com/trending?l=GLSL"
        },
        "Glyph": {
            "color": "#c1ac7f",
            "url": "https://github.com/trending?l=Glyph"
        },
        "Gnuplot": {
            "color": "#f0a9f0",
            "url": "https://github.com/trending?l=Gnuplot"
        },
        "Go": {
            "color": "#00ADD8",
            "url": "https://github.com/trending?l=Go"
        },
        "Golo": {
            "color": "#88562A",
            "url": "https://github.com/trending?l=Golo"
        },
        "Gosu": {
            "color": "#82937f",
            "url": "https://github.com/trending?l=Gosu"
        },
        "Grace": {
            "color": null,
            "url": "https://github.com/trending?l=Grace"
        },
        "Grammatical Framework": {
            "color": "#ff0000",
            "url": "https://github.com/trending?l=Grammatical-Framework"
        },
        "GraphQL": {
            "color": "#e10098",
            "url": "https://github.com/trending?l=GraphQL"
        },
        "Groovy": {
            "color": "#e69f56",
            "url": "https://github.com/trending?l=Groovy"
        },
        "Groovy Server Pages": {
            "color": null,
            "url": "https://github.com/trending?l=Groovy-Server-Pages"
        },
        "Hack": {
            "color": "#878787",
            "url": "https://github.com/trending?l=Hack"
        },
        "Haml": {
            "color": "#ece2a9",
            "url": "https://github.com/trending?l=Haml"
        },
        "Handlebars": {
            "color": "#f7931e",
            "url": "https://github.com/trending?l=Handlebars"
        },
        "Harbour": {
            "color": "#0e60e3",
            "url": "https://github.com/trending?l=Harbour"
        },
        "Haskell": {
            "color": "#5e5086",
            "url": "https://github.com/trending?l=Haskell"
        },
        "Haxe": {
            "color": "#df7900",
            "url": "https://github.com/trending?l=Haxe"
        },
        "HCL": {
            "color": null,
            "url": "https://github.com/trending?l=HCL"
        },
        "HiveQL": {
            "color": "#dce200",
            "url": "https://github.com/trending?l=HiveQL"
        },
        "HLSL": {
            "color": null,
            "url": "https://github.com/trending?l=HLSL"
        },
        "HolyC": {
            "color": "#ffefaf",
            "url": "https://github.com/trending?l=HolyC"
        },
        "HTML": {
            "color": "#e34c26",
            "url": "https://github.com/trending?l=HTML"
        },
        "Hy": {
            "color": "#7790B2",
            "url": "https://github.com/trending?l=Hy"
        },
        "HyPhy": {
            "color": null,
            "url": "https://github.com/trending?l=HyPhy"
        },
        "IDL": {
            "color": "#a3522f",
            "url": "https://github.com/trending?l=IDL"
        },
        "Idris": {
            "color": "#b30000",
            "url": "https://github.com/trending?l=Idris"
        },
        "IGOR Pro": {
            "color": "#0000cc",
            "url": "https://github.com/trending?l=IGOR-Pro"
        },
        "Inform 7": {
            "color": null,
            "url": "https://github.com/trending?l=Inform-7"
        },
        "Inno Setup": {
            "color": null,
            "url": "https://github.com/trending?l=Inno-Setup"
        },
        "Io": {
            "color": "#a9188d",
            "url": "https://github.com/trending?l=Io"
        },
        "Ioke": {
            "color": "#078193",
            "url": "https://github.com/trending?l=Ioke"
        },
        "Isabelle": {
            "color": "#FEFE00",
            "url": "https://github.com/trending?l=Isabelle"
        },
        "Isabelle ROOT": {
            "color": null,
            "url": "https://github.com/trending?l=Isabelle-ROOT"
        },
        "J": {
            "color": "#9EEDFF",
            "url": "https://github.com/trending?l=J"
        },
        "Jasmin": {
            "color": null,
            "url": "https://github.com/trending?l=Jasmin"
        },
        "Java": {
            "color": "#b07219",
            "url": "https://github.com/trending?l=Java"
        },
        "Java Server Pages": {
            "color": null,
            "url": "https://github.com/trending?l=Java-Server-Pages"
        },
        "JavaScript": {
            "color": "#f1e05a",
            "url": "https://github.com/trending?l=JavaScript"
        },
        "JavaScript+ERB": {
            "color": null,
            "url": "https://github.com/trending?l=JavaScript+ERB"
        },
        "JFlex": {
            "color": "#DBCA00",
            "url": "https://github.com/trending?l=JFlex"
        },
        "Jison": {
            "color": null,
            "url": "https://github.com/trending?l=Jison"
        },
        "Jison Lex": {
            "color": null,
            "url": "https://github.com/trending?l=Jison-Lex"
        },
        "Jolie": {
            "color": "#843179",
            "url": "https://github.com/trending?l=Jolie"
        },
        "JSONiq": {
            "color": "#40d47e",
            "url": "https://github.com/trending?l=JSONiq"
        },
        "Jsonnet": {
            "color": "#0064bd",
            "url": "https://github.com/trending?l=Jsonnet"
        },
        "JSX": {
            "color": null,
            "url": "https://github.com/trending?l=JSX"
        },
        "Julia": {
            "color": "#a270ba",
            "url": "https://github.com/trending?l=Julia"
        },
        "Jupyter Notebook": {
            "color": "#DA5B0B",
            "url": "https://github.com/trending?l=Jupyter-Notebook"
        },
        "Kaitai Struct": {
            "color": "#773b37",
            "url": "https://github.com/trending?l=Kaitai-Struct"
        },
        "Kotlin": {
            "color": "#F18E33",
            "url": "https://github.com/trending?l=Kotlin"
        },
        "KRL": {
            "color": "#28430A",
            "url": "https://github.com/trending?l=KRL"
        },
        "LabVIEW": {
            "color": null,
            "url": "https://github.com/trending?l=LabVIEW"
        },
        "Lasso": {
            "color": "#999999",
            "url": "https://github.com/trending?l=Lasso"
        },
        "Latte": {
            "color": "#f2a542",
            "url": "https://github.com/trending?l=Latte"
        },
        "Lean": {
            "color": null,
            "url": "https://github.com/trending?l=Lean"
        },
        "Less": {
            "color": "#1d365d",
            "url": "https://github.com/trending?l=Less"
        },
        "Lex": {
            "color": "#DBCA00",
            "url": "https://github.com/trending?l=Lex"
        },
        "LFE": {
            "color": "#4C3023",
            "url": "https://github.com/trending?l=LFE"
        },
        "LilyPond": {
            "color": null,
            "url": "https://github.com/trending?l=LilyPond"
        },
        "Limbo": {
            "color": null,
            "url": "https://github.com/trending?l=Limbo"
        },
        "Literate Agda": {
            "color": null,
            "url": "https://github.com/trending?l=Literate-Agda"
        },
        "Literate CoffeeScript": {
            "color": null,
            "url": "https://github.com/trending?l=Literate-CoffeeScript"
        },
        "Literate Haskell": {
            "color": null,
            "url": "https://github.com/trending?l=Literate-Haskell"
        },
        "LiveScript": {
            "color": "#499886",
            "url": "https://github.com/trending?l=LiveScript"
        },
        "LLVM": {
            "color": "#185619",
            "url": "https://github.com/trending?l=LLVM"
        },
        "Logos": {
            "color": null,
            "url": "https://github.com/trending?l=Logos"
        },
        "Logtalk": {
            "color": null,
            "url": "https://github.com/trending?l=Logtalk"
        },
        "LOLCODE": {
            "color": "#cc9900",
            "url": "https://github.com/trending?l=LOLCODE"
        },
        "LookML": {
            "color": "#652B81",
            "url": "https://github.com/trending?l=LookML"
        },
        "LoomScript": {
            "color": null,
            "url": "https://github.com/trending?l=LoomScript"
        },
        "LSL": {
            "color": "#3d9970",
            "url": "https://github.com/trending?l=LSL"
        },
        "Lua": {
            "color": "#000080",
            "url": "https://github.com/trending?l=Lua"
        },
        "M": {
            "color": null,
            "url": "https://github.com/trending?l=M"
        },
        "M4": {
            "color": null,
            "url": "https://github.com/trending?l=M4"
        },
        "M4Sugar": {
            "color": null,
            "url": "https://github.com/trending?l=M4Sugar"
        },
        "Macaulay2": {
            "color": "#d8ffff",
            "url": "https://github.com/trending?l=Macaulay2"
        },
        "Makefile": {
            "color": "#427819",
            "url": "https://github.com/trending?l=Makefile"
        },
        "Mako": {
            "color": null,
            "url": "https://github.com/trending?l=Mako"
        },
        "Markdown": {
            "color": "#083fa1",
            "url": "https://github.com/trending?l=Markdown"
        },
        "Marko": {
            "color": "#42bff2",
            "url": "https://github.com/trending?l=Marko"
        },
        "Mask": {
            "color": "#f97732",
            "url": "https://github.com/trending?l=Mask"
        },
        "Mathematica": {
            "color": null,
            "url": "https://github.com/trending?l=Mathematica"
        },
        "MATLAB": {
            "color": "#e16737",
            "url": "https://github.com/trending?l=MATLAB"
        },
        "Max": {
            "color": "#c4a79c",
            "url": "https://github.com/trending?l=Max"
        },
        "MAXScript": {
            "color": "#00a6a6",
            "url": "https://github.com/trending?l=MAXScript"
        },
        "mcfunction": {
            "color": "#E22837",
            "url": "https://github.com/trending?l=mcfunction"
        },
        "Mercury": {
            "color": "#ff2b2b",
            "url": "https://github.com/trending?l=Mercury"
        },
        "Meson": {
            "color": "#007800",
            "url": "https://github.com/trending?l=Meson"
        },
        "Metal": {
            "color": "#8f14e9",
            "url": "https://github.com/trending?l=Metal"
        },
        "MiniD": {
            "color": null,
            "url": "https://github.com/trending?l=MiniD"
        },
        "Mirah": {
            "color": "#c7a938",
            "url": "https://github.com/trending?l=Mirah"
        },
        "mIRC Script": {
            "color": "#3d57c3",
            "url": "https://github.com/trending?l=mIRC-Script"
        },
        "MLIR": {
            "color": "#5EC8DB",
            "url": "https://github.com/trending?l=MLIR"
        },
        "Modelica": {
            "color": null,
            "url": "https://github.com/trending?l=Modelica"
        },
        "Modula-2": {
            "color": null,
            "url": "https://github.com/trending?l=Modula-2"
        },
        "Modula-3": {
            "color": "#223388",
            "url": "https://github.com/trending?l=Modula-3"
        },
        "Module Management System": {
            "color": null,
            "url": "https://github.com/trending?l=Module-Management-System"
        },
        "Monkey": {
            "color": null,
            "url": "https://github.com/trending?l=Monkey"
        },
        "Moocode": {
            "color": null,
            "url": "https://github.com/trending?l=Moocode"
        },
        "MoonScript": {
            "color": null,
            "url": "https://github.com/trending?l=MoonScript"
        },
        "Motorola 68K Assembly": {
            "color": null,
            "url": "https://github.com/trending?l=Motorola-68K-Assembly"
        },
        "MQL4": {
            "color": "#62A8D6",
            "url": "https://github.com/trending?l=MQL4"
        },
        "MQL5": {
            "color": "#4A76B8",
            "url": "https://github.com/trending?l=MQL5"
        },
        "MTML": {
            "color": "#b7e1f4",
            "url": "https://github.com/trending?l=MTML"
        },
        "MUF": {
            "color": null,
            "url": "https://github.com/trending?l=MUF"
        },
        "mupad": {
            "color": null,
            "url": "https://github.com/trending?l=mupad"
        },
        "Myghty": {
            "color": null,
            "url": "https://github.com/trending?l=Myghty"
        },
        "NASL": {
            "color": null,
            "url": "https://github.com/trending?l=NASL"
        },
        "NCL": {
            "color": "#28431f",
            "url": "https://github.com/trending?l=NCL"
        },
        "Nearley": {
            "color": "#990000",
            "url": "https://github.com/trending?l=Nearley"
        },
        "Nemerle": {
            "color": "#3d3c6e",
            "url": "https://github.com/trending?l=Nemerle"
        },
        "nesC": {
            "color": "#94B0C7",
            "url": "https://github.com/trending?l=nesC"
        },
        "NetLinx": {
            "color": "#0aa0ff",
            "url": "https://github.com/trending?l=NetLinx"
        },
        "NetLinx+ERB": {
            "color": "#747faa",
            "url": "https://github.com/trending?l=NetLinx+ERB"
        },
        "NetLogo": {
            "color": "#ff6375",
            "url": "https://github.com/trending?l=NetLogo"
        },
        "NewLisp": {
            "color": "#87AED7",
            "url": "https://github.com/trending?l=NewLisp"
        },
        "Nextflow": {
            "color": "#3ac486",
            "url": "https://github.com/trending?l=Nextflow"
        },
        "Nim": {
            "color": "#ffc200",
            "url": "https://github.com/trending?l=Nim"
        },
        "Nit": {
            "color": "#009917",
            "url": "https://github.com/trending?l=Nit"
        },
        "Nix": {
            "color": "#7e7eff",
            "url": "https://github.com/trending?l=Nix"
        },
        "NSIS": {
            "color": null,
            "url": "https://github.com/trending?l=NSIS"
        },
        "Nu": {
            "color": "#c9df40",
            "url": "https://github.com/trending?l=Nu"
        },
        "NumPy": {
            "color": "#9C8AF9",
            "url": "https://github.com/trending?l=NumPy"
        },
        "Objective-C": {
            "color": "#438eff",
            "url": "https://github.com/trending?l=Objective-C"
        },
        "Objective-C++": {
            "color": "#6866fb",
            "url": "https://github.com/trending?l=Objective-C++"
        },
        "Objective-J": {
            "color": "#ff0c5a",
            "url": "https://github.com/trending?l=Objective-J"
        },
        "ObjectScript": {
            "color": "#424893",
            "url": "https://github.com/trending?l=ObjectScript"
        },
        "OCaml": {
            "color": "#3be133",
            "url": "https://github.com/trending?l=OCaml"
        },
        "Odin": {
            "color": "#60AFFE",
            "url": "https://github.com/trending?l=Odin"
        },
        "Omgrofl": {
            "color": "#cabbff",
            "url": "https://github.com/trending?l=Omgrofl"
        },
        "ooc": {
            "color": "#b0b77e",
            "url": "https://github.com/trending?l=ooc"
        },
        "Opa": {
            "color": null,
            "url": "https://github.com/trending?l=Opa"
        },
        "Opal": {
            "color": "#f7ede0",
            "url": "https://github.com/trending?l=Opal"
        },
        "Open Policy Agent": {
            "color": null,
            "url": "https://github.com/trending?l=Open-Policy-Agent"
        },
        "OpenCL": {
            "color": null,
            "url": "https://github.com/trending?l=OpenCL"
        },
        "OpenEdge ABL": {
            "color": null,
            "url": "https://github.com/trending?l=OpenEdge-ABL"
        },
        "OpenQASM": {
            "color": "#AA70FF",
            "url": "https://github.com/trending?l=OpenQASM"
        },
        "OpenRC runscript": {
            "color": null,
            "url": "https://github.com/trending?l=OpenRC-runscript"
        },
        "OpenSCAD": {
            "color": null,
            "url": "https://github.com/trending?l=OpenSCAD"
        },
        "Ox": {
            "color": null,
            "url": "https://github.com/trending?l=Ox"
        },
        "Oxygene": {
            "color": "#cdd0e3",
            "url": "https://github.com/trending?l=Oxygene"
        },
        "Oz": {
            "color": "#fab738",
            "url": "https://github.com/trending?l=Oz"
        },
        "P4": {
            "color": "#7055b5",
            "url": "https://github.com/trending?l=P4"
        },
        "Pan": {
            "color": "#cc0000",
            "url": "https://github.com/trending?l=Pan"
        },
        "Papyrus": {
            "color": "#6600cc",
            "url": "https://github.com/trending?l=Papyrus"
        },
        "Parrot": {
            "color": "#f3ca0a",
            "url": "https://github.com/trending?l=Parrot"
        },
        "Parrot Assembly": {
            "color": null,
            "url": "https://github.com/trending?l=Parrot-Assembly"
        },
        "Parrot Internal Representation": {
            "color": null,
            "url": "https://github.com/trending?l=Parrot-Internal-Representation"
        },
        "Pascal": {
            "color": "#E3F171",
            "url": "https://github.com/trending?l=Pascal"
        },
        "Pawn": {
            "color": "#dbb284",
            "url": "https://github.com/trending?l=Pawn"
        },
        "Pep8": {
            "color": "#C76F5B",
            "url": "https://github.com/trending?l=Pep8"
        },
        "Perl": {
            "color": "#0298c3",
            "url": "https://github.com/trending?l=Perl"
        },
        "PHP": {
            "color": "#4F5D95",
            "url": "https://github.com/trending?l=PHP"
        },
        "PicoLisp": {
            "color": null,
            "url": "https://github.com/trending?l=PicoLisp"
        },
        "PigLatin": {
            "color": "#fcd7de",
            "url": "https://github.com/trending?l=PigLatin"
        },
        "Pike": {
            "color": "#005390",
            "url": "https://github.com/trending?l=Pike"
        },
        "PLpgSQL": {
            "color": null,
            "url": "https://github.com/trending?l=PLpgSQL"
        },
        "PLSQL": {
            "color": "#dad8d8",
            "url": "https://github.com/trending?l=PLSQL"
        },
        "PogoScript": {
            "color": "#d80074",
            "url": "https://github.com/trending?l=PogoScript"
        },
        "Pony": {
            "color": null,
            "url": "https://github.com/trending?l=Pony"
        },
        "PostScript": {
            "color": "#da291c",
            "url": "https://github.com/trending?l=PostScript"
        },
        "POV-Ray SDL": {
            "color": null,
            "url": "https://github.com/trending?l=POV-Ray-SDL"
        },
        "PowerBuilder": {
            "color": "#8f0f8d",
            "url": "https://github.com/trending?l=PowerBuilder"
        },
        "PowerShell": {
            "color": "#012456",
            "url": "https://github.com/trending?l=PowerShell"
        },
        "Prisma": {
            "color": "#0c344b",
            "url": "https://github.com/trending?l=Prisma"
        },
        "Processing": {
            "color": "#0096D8",
            "url": "https://github.com/trending?l=Processing"
        },
        "Prolog": {
            "color": "#74283c",
            "url": "https://github.com/trending?l=Prolog"
        },
        "Propeller Spin": {
            "color": "#7fa2a7",
            "url": "https://github.com/trending?l=Propeller-Spin"
        },
        "Pug": {
            "color": "#a86454",
            "url": "https://github.com/trending?l=Pug"
        },
        "Puppet": {
            "color": "#302B6D",
            "url": "https://github.com/trending?l=Puppet"
        },
        "PureBasic": {
            "color": "#5a6986",
            "url": "https://github.com/trending?l=PureBasic"
        },
        "PureScript": {
            "color": "#1D222D",
            "url": "https://github.com/trending?l=PureScript"
        },
        "Python": {
            "color": "#3572A5",
            "url": "https://github.com/trending?l=Python"
        },
        "Python console": {
            "color": null,
            "url": "https://github.com/trending?l=Python-console"
        },
        "q": {
            "color": "#0040cd",
            "url": "https://github.com/trending?l=q"
        },
        "Q#": {
            "color": "#fed659",
            "url": "https://github.com/trending?l=Qsharp"
        },
        "QMake": {
            "color": null,
            "url": "https://github.com/trending?l=QMake"
        },
        "QML": {
            "color": "#44a51c",
            "url": "https://github.com/trending?l=QML"
        },
        "Qt Script": {
            "color": "#00b841",
            "url": "https://github.com/trending?l=Qt-Script"
        },
        "Quake": {
            "color": "#882233",
            "url": "https://github.com/trending?l=Quake"
        },
        "R": {
            "color": "#198CE7",
            "url": "https://github.com/trending?l=R"
        },
        "Racket": {
            "color": "#3c5caa",
            "url": "https://github.com/trending?l=Racket"
        },
        "Ragel": {
            "color": "#9d5200",
            "url": "https://github.com/trending?l=Ragel"
        },
        "Raku": {
            "color": "#0000fb",
            "url": "https://github.com/trending?l=Raku"
        },
        "RAML": {
            "color": "#77d9fb",
            "url": "https://github.com/trending?l=RAML"
        },
        "Rascal": {
            "color": "#fffaa0",
            "url": "https://github.com/trending?l=Rascal"
        },
        "REALbasic": {
            "color": null,
            "url": "https://github.com/trending?l=REALbasic"
        },
        "Reason": {
            "color": "#ff5847",
            "url": "https://github.com/trending?l=Reason"
        },
        "Rebol": {
            "color": "#358a5b",
            "url": "https://github.com/trending?l=Rebol"
        },
        "Red": {
            "color": "#f50000",
            "url": "https://github.com/trending?l=Red"
        },
        "Redcode": {
            "color": null,
            "url": "https://github.com/trending?l=Redcode"
        },
        "Ren'Py": {
            "color": "#ff7f7f",
            "url": "https://github.com/trending?l=Ren'Py"
        },
        "RenderScript": {
            "color": null,
            "url": "https://github.com/trending?l=RenderScript"
        },
        "REXX": {
            "color": null,
            "url": "https://github.com/trending?l=REXX"
        },
        "Ring": {
            "color": "#2D54CB",
            "url": "https://github.com/trending?l=Ring"
        },
        "Riot": {
            "color": "#A71E49",
            "url": "https://github.com/trending?l=Riot"
        },
        "RobotFramework": {
            "color": null,
            "url": "https://github.com/trending?l=RobotFramework"
        },
        "Roff": {
            "color": "#ecdebe",
            "url": "https://github.com/trending?l=Roff"
        },
        "Rouge": {
            "color": "#cc0088",
            "url": "https://github.com/trending?l=Rouge"
        },
        "RPC": {
            "color": null,
            "url": "https://github.com/trending?l=RPC"
        },
        "Ruby": {
            "color": "#701516",
            "url": "https://github.com/trending?l=Ruby"
        },
        "RUNOFF": {
            "color": "#665a4e",
            "url": "https://github.com/trending?l=RUNOFF"
        },
        "Rust": {
            "color": "#dea584",
            "url": "https://github.com/trending?l=Rust"
        },
        "Sage": {
            "color": null,
            "url": "https://github.com/trending?l=Sage"
        },
        "SaltStack": {
            "color": "#646464",
            "url": "https://github.com/trending?l=SaltStack"
        },
        "SAS": {
            "color": "#B34936",
            "url": "https://github.com/trending?l=SAS"
        },
        "Sass": {
            "color": "#a53b70",
            "url": "https://github.com/trending?l=Sass"
        },
        "Scala": {
            "color": "#c22d40",
            "url": "https://github.com/trending?l=Scala"
        },
        "Scheme": {
            "color": "#1e4aec",
            "url": "https://github.com/trending?l=Scheme"
        },
        "Scilab": {
            "color": null,
            "url": "https://github.com/trending?l=Scilab"
        },
        "SCSS": {
            "color": "#c6538c",
            "url": "https://github.com/trending?l=SCSS"
        },
        "sed": {
            "color": "#64b970",
            "url": "https://github.com/trending?l=sed"
        },
        "Self": {
            "color": "#0579aa",
            "url": "https://github.com/trending?l=Self"
        },
        "ShaderLab": {
            "color": null,
            "url": "https://github.com/trending?l=ShaderLab"
        },
        "Shell": {
            "color": "#89e051",
            "url": "https://github.com/trending?l=Shell"
        },
        "ShellSession": {
            "color": null,
            "url": "https://github.com/trending?l=ShellSession"
        },
        "Shen": {
            "color": "#120F14",
            "url": "https://github.com/trending?l=Shen"
        },
        "Sieve": {
            "color": null,
            "url": "https://github.com/trending?l=Sieve"
        },
        "Slash": {
            "color": "#007eff",
            "url": "https://github.com/trending?l=Slash"
        },
        "Slice": {
            "color": "#003fa2",
            "url": "https://github.com/trending?l=Slice"
        },
        "Slim": {
            "color": "#2b2b2b",
            "url": "https://github.com/trending?l=Slim"
        },
        "Smali": {
            "color": null,
            "url": "https://github.com/trending?l=Smali"
        },
        "Smalltalk": {
            "color": "#596706",
            "url": "https://github.com/trending?l=Smalltalk"
        },
        "Smarty": {
            "color": null,
            "url": "https://github.com/trending?l=Smarty"
        },
        "SmPL": {
            "color": "#c94949",
            "url": "https://github.com/trending?l=SmPL"
        },
        "SMT": {
            "color": null,
            "url": "https://github.com/trending?l=SMT"
        },
        "Solidity": {
            "color": "#AA6746",
            "url": "https://github.com/trending?l=Solidity"
        },
        "SourcePawn": {
            "color": "#f69e1d",
            "url": "https://github.com/trending?l=SourcePawn"
        },
        "SQF": {
            "color": "#3F3F3F",
            "url": "https://github.com/trending?l=SQF"
        },
        "SQLPL": {
            "color": null,
            "url": "https://github.com/trending?l=SQLPL"
        },
        "Squirrel": {
            "color": "#800000",
            "url": "https://github.com/trending?l=Squirrel"
        },
        "SRecode Template": {
            "color": "#348a34",
            "url": "https://github.com/trending?l=SRecode-Template"
        },
        "Stan": {
            "color": "#b2011d",
            "url": "https://github.com/trending?l=Stan"
        },
        "Standard ML": {
            "color": "#dc566d",
            "url": "https://github.com/trending?l=Standard-ML"
        },
        "Starlark": {
            "color": "#76d275",
            "url": "https://github.com/trending?l=Starlark"
        },
        "Stata": {
            "color": null,
            "url": "https://github.com/trending?l=Stata"
        },
        "Stylus": {
            "color": "#ff6347",
            "url": "https://github.com/trending?l=Stylus"
        },
        "SuperCollider": {
            "color": "#46390b",
            "url": "https://github.com/trending?l=SuperCollider"
        },
        "Svelte": {
            "color": "#ff3e00",
            "url": "https://github.com/trending?l=Svelte"
        },
        "SVG": {
            "color": "#ff9900",
            "url": "https://github.com/trending?l=SVG"
        },
        "Swift": {
            "color": "#ffac45",
            "url": "https://github.com/trending?l=Swift"
        },
        "SWIG": {
            "color": null,
            "url": "https://github.com/trending?l=SWIG"
        },
        "SystemVerilog": {
            "color": "#DAE1C2",
            "url": "https://github.com/trending?l=SystemVerilog"
        },
        "Tcl": {
            "color": "#e4cc98",
            "url": "https://github.com/trending?l=Tcl"
        },
        "Tcsh": {
            "color": null,
            "url": "https://github.com/trending?l=Tcsh"
        },
        "Terra": {
            "color": "#00004c",
            "url": "https://github.com/trending?l=Terra"
        },
        "TeX": {
            "color": "#3D6117",
            "url": "https://github.com/trending?l=TeX"
        },
        "Thrift": {
            "color": null,
            "url": "https://github.com/trending?l=Thrift"
        },
        "TI Program": {
            "color": "#A0AA87",
            "url": "https://github.com/trending?l=TI-Program"
        },
        "TLA": {
            "color": null,
            "url": "https://github.com/trending?l=TLA"
        },
        "TSQL": {
            "color": null,
            "url": "https://github.com/trending?l=TSQL"
        },
        "TSX": {
            "color": null,
            "url": "https://github.com/trending?l=TSX"
        },
        "Turing": {
            "color": "#cf142b",
            "url": "https://github.com/trending?l=Turing"
        },
        "Twig": {
            "color": "#c1d026",
            "url": "https://github.com/trending?l=Twig"
        },
        "TXL": {
            "color": null,
            "url": "https://github.com/trending?l=TXL"
        },
        "TypeScript": {
            "color": "#2b7489",
            "url": "https://github.com/trending?l=TypeScript"
        },
        "Unified Parallel C": {
            "color": "#4e3617",
            "url": "https://github.com/trending?l=Unified-Parallel-C"
        },
        "Unix Assembly": {
            "color": null,
            "url": "https://github.com/trending?l=Unix-Assembly"
        },
        "Uno": {
            "color": "#9933cc",
            "url": "https://github.com/trending?l=Uno"
        },
        "UnrealScript": {
            "color": "#a54c4d",
            "url": "https://github.com/trending?l=UnrealScript"
        },
        "UrWeb": {
            "color": null,
            "url": "https://github.com/trending?l=UrWeb"
        },
        "V": {
            "color": "#4f87c4",
            "url": "https://github.com/trending?l=V"
        },
        "Vala": {
            "color": "#fbe5cd",
            "url": "https://github.com/trending?l=Vala"
        },
        "VBA": {
            "color": "#867db1",
            "url": "https://github.com/trending?l=VBA"
        },
        "VBScript": {
            "color": "#15dcdc",
            "url": "https://github.com/trending?l=VBScript"
        },
        "VCL": {
            "color": "#148AA8",
            "url": "https://github.com/trending?l=VCL"
        },
        "Verilog": {
            "color": "#b2b7f8",
            "url": "https://github.com/trending?l=Verilog"
        },
        "VHDL": {
            "color": "#adb2cb",
            "url": "https://github.com/trending?l=VHDL"
        },
        "Vim script": {
            "color": "#199f4b",
            "url": "https://github.com/trending?l=Vim-script"
        },
        "Visual Basic .NET": {
            "color": "#945db7",
            "url": "https://github.com/trending?l=Visual-Basic-.NET"
        },
        "Volt": {
            "color": "#1F1F1F",
            "url": "https://github.com/trending?l=Volt"
        },
        "Vue": {
            "color": "#2c3e50",
            "url": "https://github.com/trending?l=Vue"
        },
        "wdl": {
            "color": "#42f1f4",
            "url": "https://github.com/trending?l=wdl"
        },
        "WebAssembly": {
            "color": "#04133b",
            "url": "https://github.com/trending?l=WebAssembly"
        },
        "WebIDL": {
            "color": null,
            "url": "https://github.com/trending?l=WebIDL"
        },
        "wisp": {
            "color": "#7582D1",
            "url": "https://github.com/trending?l=wisp"
        },
        "Wollok": {
            "color": "#a23738",
            "url": "https://github.com/trending?l=Wollok"
        },
        "X10": {
            "color": "#4B6BEF",
            "url": "https://github.com/trending?l=X10"
        },
        "xBase": {
            "color": "#403a40",
            "url": "https://github.com/trending?l=xBase"
        },
        "XC": {
            "color": "#99DA07",
            "url": "https://github.com/trending?l=XC"
        },
        "Xojo": {
            "color": null,
            "url": "https://github.com/trending?l=Xojo"
        },
        "XProc": {
            "color": null,
            "url": "https://github.com/trending?l=XProc"
        },
        "XQuery": {
            "color": "#5232e7",
            "url": "https://github.com/trending?l=XQuery"
        },
        "XS": {
            "color": null,
            "url": "https://github.com/trending?l=XS"
        },
        "XSLT": {
            "color": "#EB8CEB",
            "url": "https://github.com/trending?l=XSLT"
        },
        "Xtend": {
            "color": null,
            "url": "https://github.com/trending?l=Xtend"
        },
        "Yacc": {
            "color": "#4B6C4B",
            "url": "https://github.com/trending?l=Yacc"
        },
        "YAML": {
            "color": "#cb171e",
            "url": "https://github.com/trending?l=YAML"
        },
        "YARA": {
            "color": "#220000",
            "url": "https://github.com/trending?l=YARA"
        },
        "YASnippet": {
            "color": "#32AB90",
            "url": "https://github.com/trending?l=YASnippet"
        },
        "ZAP": {
            "color": "#0d665e",
            "url": "https://github.com/trending?l=ZAP"
        },
        "Zeek": {
            "color": null,
            "url": "https://github.com/trending?l=Zeek"
        },
        "ZenScript": {
            "color": "#00BCD1",
            "url": "https://github.com/trending?l=ZenScript"
        },
        "Zephir": {
            "color": "#118f9e",
            "url": "https://github.com/trending?l=Zephir"
        },
        "Zig": {
            "color": "#ec915c",
            "url": "https://github.com/trending?l=Zig"
        },
        "ZIL": {
            "color": "#dc75e5",
            "url": "https://github.com/trending?l=ZIL"
        },
        "Zimpl": {
            "color": null,
            "url": "https://github.com/trending?l=Zimpl"
        }
}


export { socialMedias, skillsSection, navBar, greeting, Projects, githubColors };