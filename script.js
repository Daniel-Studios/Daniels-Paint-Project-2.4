//Running main Function
main();
//Adding Event Listeners
canvas.addEventListener('touchmove',handleTouchMove);
canvas.addEventListener('touchstart',handleTouchStart);
canvas.addEventListener('mousemove',handleMouseMove);
canvas.addEventListener('mouseup',handleMouseUp);
canvas.addEventListener('mousedown',handleMouseDown);
document.getElementById("selectColor").addEventListener("click",()=>{setColor()});
document.getElementById("selectPen").addEventListener("click",()=>{changeTool("pen")});
document.getElementById("selectEraser").addEventListener("click",()=>{changeTool("eraser")});
document.getElementById("clear").addEventListener("click",()=>{clear()});
document.getElementById("settings").addEventListener("click",()=>{toggleOptions()});
document.getElementById("strokeSlider").addEventListener("input",()=>{setStroke()});


// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '#selectColor',
    container: 'body',
    theme: 'nano',
    closeOnScroll: false,
    appClass: 'custom-class',
    useAsButton: false,
    padding: 8,
    inline: false,
    autoReposition: true,
    sliders: 'hh',
    disabled: false,
    enabled: true,
    lockOpacity: false,
    outputPrecision: 0,
    comparison: true,
    default: '#000000',
    swatches: [
        '#000000',
        '#42445A',
        '#0000FF',
        '#F44336',
        '#E91E63',
        '#9C27B0',
        '#673AB7'
    ],
    defaultRepresentation: 'HEX',
    showAlways: false,
    hideAlways: true,
    closeWithKey: 'Escape',
    openWithKey: 'Enter',
    position: 'bottom-middle',
    adjustableNumbers: true,
        
        components: {
            palette: true,
            preview: true,
            opacity: true,
            hue: true,
        
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
        },
    },
    i18n: {
       
       'ui:dialog': 'color picker dialog',
       'btn:toggle': 'toggle color picker dialog',
       'btn:swatch': 'color swatch',
       'btn:last-color': 'use previous color',
       
       'aria:ui:dialog': 'Dialog',
       'aria:btn:toggle': 'Toggle',
       'aria:btn:swatch': 'Swatch',
       'aria:btn:last-color': 'Previous Color',
       'aria:input': 'color input field',
       'aria:palette': 'color selection area',
       'aria:hue': 'hue selection slider',
       'aria:opacity': 'selection slider'
    }
});

pickr.on('init', instance => {
    console.log('init', instance);
    init=start
    start=init
});

pickr.on('hide', instance => {
    console.log('hide', instance);
    hide=close
    close=hide
});

pickr.on('show', (color, instance) => {
    console.log('show', color, instance);
    show=open
    open=show
});

pickr.on('change', (color, instance) => {
    console.log('change', color, instance);
    setColor(`${color.toHEXA()}`)
    pickr.applyColor(true)
    change=select
    select=change
});

var canvas,ctx;alert("please upvote if you liked \n This is my first try with html canvas Hope you will like it!");;var settings={currentTool:"pen",backgroundColor:"white",width:5,pen:{name:"pen",color:"black",lineCap:"round",lineJoin:"round"},eraser:{name:"eraser",color:"white",lineCap:"round",lineJoin:"round"}};let cord={x:0,y:0};var isPainting=!1;function main(){document.getElementById("loader").style.animation="fade .3s linear 1s",setTimeout(()=>{document.getElementById("loader").style.display="none"},1300),canvas=document.getElementById("canvas"),resizeCanvas(),(ctx=canvas.getContext("2d")).lineJoin="round",document.getElementById("c-border").style.backgroundColor=settings.pen.color}function getPosition(e){cord.x=e.clientX-canvas.offsetLeft,cord.y=e.clientY-canvas.offsetTop}function resizeCanvas(){canvas.width=document.getElementById("canvas-container").clientWidth,canvas.height=document.getElementById("canvas-container").clientHeight}function clear(){ctx.clearRect(0,0,canvas.width,canvas.height)}function changeTool(e){"pen"==e&&(canvas.style.cursor="crosshair",document.getElementById("selectPen").style.backgroundColor="#ccc",document.getElementById("selectEraser").style.backgroundColor="#fff"),"eraser"==e&&(canvas.style.cursor="eraser",document.getElementById("selectEraser").style.backgroundColor="#ccc",document.getElementById("selectPen").style.backgroundColor="#fff"),settings.currentTool=e}function currentTool(){return settings[settings.currentTool]}function setValue(e,t){return settings[settings.currentTool][e]=t}function setColor(e){settings.pen.color=e}function setStroke(){var e=document.getElementById("strokeSlider"),t=document.getElementById("stroke-preview");t.style.width=e.value+"px",t.style.height=e.value+"px",settings.width=e.value}function openSettings(){var e=document.getElementById("options");e.style.animation="goUp .2s ease-in ",setTimeout(()=>{e.style.bottom="70px",e.style.zIndex="123",e.style.opacity="1"},200)}function closeSettings(){var e=document.getElementById("options");e.style.animation="goDown .2s ease-out ",setTimeout(()=>{e.style.bottom="-50px",e.style.zIndex="5",e.style.opacity="0"},200)}setTimeout(()=>{"pen"==settings.currentTool&&(canvas.style.cursor="crosshair",document.getElementById("selectPen").style.backgroundColor="#ccc",document.getElementById("selectEraser").style.backgroundColor="#fff"),"pen"!=settings.currentTool&&(canvas.style.cursor="eraser",document.getElementById("selectEraser").style.backgroundColor="#ccc",document.getElementById("selectPen").style.backgroundColor="#fff")},10);var isSettOpen=!1;function toggleOptions(){isSettOpen?(closeSettings(),isSettOpen=!1):(openSettings(),isSettOpen=!0)}function handleTouchMove(e){var t,n;t=e.touches[0].clientX,n=e.touches[0].clientY,ctx.lineTo(t,n),ctx.strokeStyle=currentTool().color,ctx.lineWidth=settings.width,ctx.lineCap=currentTool().lineCap,ctx.stroke()}function handleTouchStart(e){var t,n;t=e.touches[0].clientX,n=e.touches[0].clientY,ctx.beginPath(),ctx.lineTo(t,n),ctx.strokeStyle=currentTool().color,ctx.lineWidth=settings.width,ctx.lineCap=currentTool().lineCap,ctx.stroke()}function handleMouseMove(e){isPainting&&(ctx.beginPath(),ctx.strokeStyle=currentTool().color,ctx.lineWidth=settings.width,ctx.lineCap=currentTool().lineCap,ctx.moveTo(cord.x,cord.y),getPosition(e),ctx.lineTo(cord.x,cord.y),ctx.stroke())}function handleMouseDown(e){isPainting=!0,getPosition(e)}function handleMouseUp(e){isPainting=!1}

$ npm install @simonwep/pickr
$ yarn add @simonwep/pickrA

// One of the following themes
import '@simonwep/pickr/dist/themes/classic.min.css';   // 'classic' theme
import '@simonwep/pickr/dist/themes/monolith.min.css';  // 'monolith' theme
import '@simonwep/pickr/dist/themes/nano.min.css';      // 'nano' theme

// Modern or es5 bundle (pay attention to the note below!)
import Pickr from '@simonwep/pickr';
import Pickr from '@simonwep/pickr/dist/pickr.es5.min';
