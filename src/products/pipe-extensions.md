--- 
tags: product

icon: <svg viewBox="0 0 34 34" height="1.25em" width="1.25em">
        <defs id="defs2">
            <linearGradient id="linearGradient886" inkscape:collect="always">
                <stop id="stop882" offset="0" style="stop-color:#63f8ff;stop-opacity:1" />
                <stop id="stop884" offset="1" style="stop-color:#ff7ed2;stop-opacity:1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="64.000002" x2="124.10352" y1="64.000002" x1="3.8964844" id="linearGradient888" xlink:href="#linearGradient886" inkscape:collect="always" />
        </defs>
        <g>
            <path id="path890" style="fill:url(#linearGradient888);fill-opacity:1"
                d="M 64 3.8964844 A 60.104071 60.104071 0 0 0 3.8964844 64 A 60.104071 60.104071 0 0 0 64 124.10352 A 60.104071 60.104071 0 0 0 124.10352 64 A 60.104071 60.104071 0 0 0 64 3.8964844 z M 48.580078 29 L 55.580078 29 L 55.580078 99 L 48.580078 99 L 48.580078 29 z M 70.984375 29 L 88.449219 63.953125 L 88.484375 63.976562 L 88.472656 64 L 88.484375 64.023438 L 88.449219 64.046875 L 70.984375 99 L 64.921875 94.955078 L 80.388672 64 L 64.921875 33.044922 L 70.984375 29 z "
                transform="scale(0.26458333)" />
        </g>
    </svg>
title: Pipe Extensions
tagline: Because the forward pipe operator (|>) from F# seems to be far off. 
productTags:
    - Library
    - C#
    - Functional Programming
    - Stable
    
layout: layout-product.njk
---

# Pipe Extensions

## Impetus

I believe the forward pipe operator is one of the most crucial operators to create concise and readable code. I know that's a pretty crazy statement, but I do honestly believe it.

When I found out there's not a way to make a forward pipe operator in C#, I built a library.

Be careful with this. This dependency is a lot like [Automapper](https://automapper.org/), once you expose your codebase to it, it can be hard to remove.

## Features

- Compatible with most versions of dotnet: And it would have been much easier if I didn't take the time to do that.
- Pass multiple types: Using tuples, you can pass up to three variables as parameters to the next function.
- Install through NuGet: Because it's important to use the right channels.
- Dependency-less: You only install the code itself.

## Links

- [NuGet: WinstonPuckett.PipeExtensions](https://www.nuget.org/packages/WinstonPuckett.PipeExtensions)
- [Source Code](https://github.com/winstonpuckett/WinstonPuckett.PipeExtensions)

## Tech stack

- C#... Just C#