var smartgrid = require('smart-grid');
 
/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 24, /* number of grid columns */
    offset: "10px", /* gutter width px || % */
    container: {
        maxWidth: '960px', /* max-width �n very large screen */
       //fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            'width': '1100px', /* -> @media (max-width: 1100px) */
            'fields': '30px' /* side fields */
        },
        md: {
            'width': '960px',
            'fields': '15px'
        },
        sm: {
            'width': '780px',
            'fields': '15px'
        },
        xs: {
            'width': '560px',
            'fields': '15px'
        },
        xxs: {
            'width': '480px',
            'fields': '15px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            some_width: 'Npx',
            some_offset: 'N(px|%)'
        }
        */
    }
};
 
smartgrid('./src/sass', settings);