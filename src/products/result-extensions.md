--- 
tags: product
date: 2021-06-30

icon: <svg width="80%"style="vertical-align:middle;" height="80%" viewBox="0 0 32 32">
        <defs>
            <linearGradient id="linearGradient886">
                <stop style="stop-color:#63f8ff;stop-opacity:1" offset="0"></stop>
                <stop style="stop-color:#ff7ed2;stop-opacity:1" offset="1"></stop>
            </linearGradient>
            <linearGradient gradientTransform="matrix(3.2440207,0,0,3.2440207,39.935169,9.6920141)"
                gradientUnits="userSpaceOnUse" y2="2.2322044" x2="-2.188436" y1="2.2322044" x1="-11.992628"
                id="linearGradient1454" xlink:href="#linearGradient886"></linearGradient>
            
        </defs>
        <g>
            <circle r="16" cy="50%" cx="50%" style="fill:url(#linearGradient1454);fill-opacity:1;"></circle>
            <g>
                <g transform="translate(-3.3447418)">
                    <rect transform="rotate(90)" y="-29.538492" x="7.6729164" height="18.520834" width="1.8520833"
                        style="fill:#f9f9f9;stroke-width:16"></rect>
                    <rect style="fill:#f9f9f9;stroke-width:16" width="1.8520833" height="18.520834"
                        x="13.450386" y="-29.538492" transform="rotate(90)"></rect>
                    <rect style="fill:#f9f9f9;stroke-width:16" width="1.8520833" height="18.520834"
                        x="-18.647211" y="-26.19375" transform="scale(-1)"></rect>
                    <rect transform="scale(-1)" y="-26.19375" x="-12.869741" height="18.520834" width="1.8520833"
                        style="fill:#f9f9f9;stroke-width:16"></rect>
                </g>
            </g>
        </g>
    </svg>
title: Result Extensions
tagline: Adding the result monad to C#.
productTags:
    - Library
    - C#
    - Functional Programming
    - Stable
    
layout: layout-product.njk
--- 

# Result Extensions

## Impetus

Once [Pipe Extensions](/products/pipe-extensions) was off the ground, I was tired of using try/catch, which breaks up the flow of pipes. I built this library to deprecate try/catch in favor of the Result monad. However, I didn't really write documentation for it, and so it may be less obvious how wonderful this package is.

Intellisense provides great documentation if you want to take a look at it.

## Features

- Compatible with most versions of dotnet: And it would have been much easier if I didn't take the time to do that.
- Pass multiple types: Using tuples, you can pass up to three variables as parameters to the next function.
- Install through NuGet: Because it's important to use the right channels.
- Dependency-less: You only install the code itself.

## Links

- [NuGet: WinstonPuckett.ResultExtensions](https://www.nuget.org/packages/WinstonPuckett.ResultExtensions)
- [Source Code](https://github.com/winstonpuckett/WinstonPuckett.ResultExtensions)

## Tech stack

- C#... Just C#