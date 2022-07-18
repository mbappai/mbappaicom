import vsDark from '@theme-ui/prism/presets/vs-dark.json'

// example theme file
const theme = {
        // colors,
        fonts: {
          body: 'IBM Plex Sans Condensed, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
          heading: 'IBM Plex Sans Condensed, system-ui, Georgia, serif',
          monospace: 'IBM Plex Mono, monospace',
          title:'IBM Plex Sans Condensed, system-ui'
        },
        fontSizes: [
           14, 17, 20, 25, 36, 48, 61, 76
        ],
        space:[0,2,4,8,12,16,24,32,40,48],
        fontWeights: {
          normal: 400,
          medium: 500,
          bold: 700,
        },

        lineHeights: {
          body: 1.4,
          heading: 1.125,
          title: 1
        },
        
        letterSpacings: {
          body: '-0.04px',
          caps: '0.2em',
          listItem:'-0.04px',
          heading:'-1px'
        },
        text: {
              caps: {
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
              },
              link:{
                fontWeight:'medium',
                fontSize:1,
                lineHeight:'body',
                letterSpacing:'listItem',
                fontFamily:'body'
              },
              body:{
                fontWeight:'normal',
                fontSize:1,
                lineHeight:'body',
                letterSpacing:'listItem',
                fontFamily:'body'
              },

              heading: {
                fontFamily: 'heading',
                fontWeight: 'bold',
                lineHeight: 'heading',
                fontSize: 4,
                lineHeight:'title',
                letterSpacing:'heading'
              },
              title:{
                  fontFamily:'title',
                  fontWeight:'bold',
                  // lineHeight: 'heading',
                  letterSpacing:'heading',
                  // fontSize: 6,
              },
              
            },
        styles: {
            blockquote:{

            },
              h1: {
                fontSize: 4,
                fontFamily: 'heading',
                fontWeight: 'bold',
                lineHeight:'title',
                letterSpacing:'heading',
                mt: 4,
                mb: 3,
              },
              h2: {
                fontSize: 3,
                fontFamily: 'heading',
                fontWeight: 'bold',
                mt: 2,
                mb: 2,
              },
              h3:{
                fontSize: 3,
                fontFamily: 'heading',
                fontWeight: 'bold',
                mt: 4,
                mb: 2,
              },
              h4:{
                fontSize: 5,
                fontFamily: 'heading',
                fontWeight: 'bold',
                mt: 4,
                mb: 2,
              },
              p: {
                fontSize: 1,
                fontFamily: 'body',
                fontWeight: 'body',
                lineHeight:'body',
                letterSpacing:'body',
                width: '55ch',
                mb: 4,
                mt: 1
              },
              li:{
                fontSize: 1,
                fontFamily: 'body',
                fontWeight: 'normal',
                lineHeight:'body',
                letterSpacing:'body',
                width:'55ch',
                mb: 2,
                mt: 1,
                ml:0,
                px:0
              },
              pre: {
                width:"700px",
                overflowX:'auto',
                ".language-solidity":{
                  // background:'black',
                  fontFamily:'monospace',
                  fontSize: 0,
                  
                },
                // ...vsDark
              },
            }
          
      
  }
  
  export default theme