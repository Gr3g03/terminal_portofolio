/* eslint-disable import/no-anonymous-default-export */
import getnp from "../../utils/spotify"
export default {
    commands: {
        echo: {
            description: 'Prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        about: {
            description: 'About Me.',
            usage: 'about',
            fn: () => {
                return "About Me.\n---\nmale\n23\ndeputet\nsingledev\nmelophile\nweeb\n---\n"
            }
        },
        // twitter: {
        //     description: 'Opens my Twitter Handle.',
        //     usage: 'twitter',
        //     fn: () => {
        //         window.open('https://twitter.com/_asheeshh', '_blank')
        //         return "opening twitter handle..."
        //     }
        // },
        github: {
            description: 'Opens my GitHub Profile.',
            usage: 'twitter',
            fn: () => {
                window.open('https://github.com/Gr3g03', '_blank')
                return "opening github account..."
            }
        },
        // discord: {
        //     description: 'Opens my Discord Account.',
        //     usage: 'twitter',
        //     fn: () => {
        //         window.open('https://discordapp.com/users/784363251940458516', '_blank')
        //         return "opening discord account..."
        //     }
        // },
        languages: {
            description: 'Languages I know.',
            usage: 'languages',
            fn: () => {
                return `
                    these are the languages I know.\n---\n
                    english          - 70%
                    gen-z-langauge   - 00%
                    javascript       - 60%
                    typescript           - 60%
                    html5            - 90%
                    css3             - 80%
                    nodejs             - 40%
                    sql             - 10% - [learning]
                    nextjs          - 10% - [learning]\n---\n
                `
            }
        },
        skills: {
            description: 'Skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                    these are the skills I have.\n---\n
                    procrastination  - 100%
                    coding           - 50%
                    studying         - 10%
                    overthinking     - 100%
                    social-skills    - 00%
                    making-playlists - 100%\n---\n
                `
            }
        },
        projects: {
            description: 'Projects I have worked on.',
            usage: 'projects',
            fn: () => {
                return `
                    Cool projects I have worked on.\n---\n
                    'grigor'                         | 'terminal portfolio'   | 'javascript'
                    'octocolor'                       | 'github profile color' | 'javascript'
                    'kanna-chan'                      | 'Discord-Bot'          | 'python'
                    'wordinal'                        | 'wordle-on-terminal'   | 'javascript'
                    'weeby.py'                        | 'API-wrapper'          | 'python'
                    'gitbanner'                       | 'banner-generator'     | 'javascript'\n---\n
                `
            }
        },
        editor: {
            description: 'Details about my current editor',
            usage: 'editor',
            fn: () => {
                return `
                    Editor: Visual Studio Code\n
                    Theme : Catpuccin\n
                    Font  : Consolas
                `
            }
        },
        repo: {
            description: "Opens this website's github repository.",
            usage: 'repo',
            fn: () => {
                window.open("https://github.com/Gr3g03/dap_nft", '_blank')
                return "opening repository..."
            }
        },
        spotify: {
            description: 'Get info about my recently played song.',
            usage: 'spotify',
            fn: async () => {
                const item = await getnp()
                return `
                    Now Playing/Recently Played\n
                    ---\n
                    Song: ${item.song}\n
                    Artist: ${item.artist}\n---\n
                `
            }
        }
    },
    overwrites:{
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
        cd: {
            description: 'Change directory, not really, lol!',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'List files in the current directory',
            usage: 'ls',
        },
        mkdir: {
            description: 'Make a directory',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'Clears the terminal',
            usage: 'clear'
        },
        cat: {
            description: 'Get a cute cat image.',
            usage: 'cat',
        }
    }
}
