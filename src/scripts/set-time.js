const fs = require('fs');

// Functions
const getDigit = (number = string, offset = 0) => {
    return `
    <g style="transform: translateX(${offset}rem);"> 
        ${ (new RegExp([0, 2, 3, 5, 7, 8, 9].join('|')).test(number)) ? // Top
            `
            <g>
                <path d="m115.912 181.901h-25.755c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h25.755c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z" fill="#e8edf2"/>
            </g>
            ` : ''
        }
        ${ (new RegExp([0, 1, 2, 3, 4, 7, 8, 9].join('|')).test(number)) ? // Top Right
            `
            <g>
                <path d="m132.919 233.958c-4.267 0-7.726-3.459-7.726-7.726v-39.147c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v39.147c0 4.267-3.459 7.726-7.726 7.726z" fill="#e8edf2"/>
            </g>
            ` : ''
        }
        ${ (new RegExp([0, 1, 3, 4, 5, 6, 7, 8, 9].join('|')).test(number)) ? // Bottom Right
            `
            <g>
                <path d="m132.919 296.218c-4.267 0-7.726-3.459-7.726-7.726v-39.147c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v39.147c0 4.267-3.459 7.726-7.726 7.726z" fill="#e8edf2"/>
            </g>
            ` : ''
        }
        ${ (new RegExp([0, 2, 3, 5, 6, 8, 9].join('|')).test(number)) ? // Bottom
            `
            <g> 
                <path d="m115.912 309.129h-25.755c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h25.755c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z" fill="#e8edf2"/>
            </g>
            ` : ''
        }
        ${ (new RegExp([0, 2, 6, 8].join('|')).test(number)) ? // Bottom Left
            `
            <g>
                <path d="m73.15 296.218c-4.267 0-7.726-3.459-7.726-7.726v-39.147c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v39.147c.001 4.267-3.458 7.726-7.726 7.726z" fill="#e8edf2"/>
            </g>
            ` : ''
        }
        ${ (new RegExp([0, 4, 5, 6, 8, 9].join('|')).test(number)) ?  // Top Left
            `
            <g>
                <path d="m73.15 233.958c-4.267 0-7.726-3.459-7.726-7.726v-39.147c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v39.147c.001 4.267-3.458 7.726-7.726 7.726z" fill="#e8edf2"/>
            </g>
            ` : ''
        }
        ${ (new RegExp([2, 3, 4, 5, 6, 8, 9].join('|')).test(number)) ?  // Center
            `<g>
                <path d="m115.456 245.515h-25.755c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h25.755c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z" fill="#e8edf2"/>
            </g>
            ` : ''
        }
    </g>
    `;
}

// Read clock template file
const clock = fs.readFileSync('./src/assets/clock.svg', 'utf8');

const time = new Date().toTimeString().split(':').slice(0, 2).join('');
console.log(time)

// Get all digits
const digits = [
    getDigit(time[0], 0),
    getDigit(time[1], 5.5),
    getDigit(time[2], 13),
    getDigit(time[3], 18.5),
];

// Replace placeholder with ddigits
const currentClock = clock.replace('<!-- {{digits}} -->', digits.join('\n'));

// Write new file to output
fs.writeFileSync('./output/clock-live.svg', currentClock, 'utf8');
