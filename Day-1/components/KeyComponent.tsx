import { Dispatch, SetStateAction } from 'react';
import '../styles/keyStyles.css'; 


const KeyComponent = (props:{dataKey:number, keyName: string, keySound: string, keySrc: string, setImage: Dispatch<SetStateAction<string>>})=>{

    window.addEventListener("keydown", async function(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) as HTMLAudioElement; 
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) as HTMLAudioElement; 
        
        console.log(key);
        if(!audio) return;
        
         audio.currentTime= 0; 
        await audio.play(); 

        key.classList.add('playing'); 

        const keys = document.querySelectorAll('.key') as NodeListOf<Element>; 
        
        
        const removeTransition = (e:TransitionEvent) =>{
            if(e.propertyName ==='transform') return; 
            
            key.classList.remove('playing');
        }

        for (let i = 0; i < keys.length; i++) {
            (keys[i] as HTMLElement).addEventListener('transitionend', removeTransition as (e: TransitionEvent) => void);
        }
        
        switch(e.keyCode){
            case 65:
                props.setImage(`../static/images/supaMario.jpeg`); 
                break;
            case 83:
                props.setImage(`../static/images/knigthto.jpg`); 
                break;
            case 68:
                props.setImage(`../static/images/islandADven.jpg`); 
                break;
            case 70:
                props.setImage(`../static/images/hurryUp.jpg`); 
                break;
            case 71:
                props.setImage(`../static/images/jump.jpg`); 
                break;
            case 72: 
                props.setImage(`../static/images/mini-jump.jpg`); 
                break;
            case 74:
                props.setImage(`../static/images/metalSlug.jpg`); 
                break;
            case 75:
                props.setImage(`../static/images/soniCo.png`); 
                break;
            case 76:
                props.setImage(`../static/images/zeldita.jpg`); 
                break;
            default:
                return props.setImage('');
        }
        
    }); 

    return(
        <div>

            <div data-key={props.dataKey} className="key">
                <kbd className='kbd'>{props.keyName}</kbd>
                <span className="sound">{props.keySound}</span>
            </div>
            
            <audio data-key={props.dataKey} src={props.keySrc}></audio>
            
        </div>
    )
}

export {KeyComponent}