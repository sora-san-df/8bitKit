import {ParentContainer} from '../components/ParentContainer';
import {KeyComponent} from '../components/KeyComponent';
import { useState } from 'react';

function App (){

  const [image, setImage] = useState<string>('');
  return(

    <div>

      <ParentContainer 
        image={image}>
        <KeyComponent
          dataKey={65}
          keyName='a'
          keySound='coin'
          keySrc={"../static/sounds/coin.wav"}
          setImage={setImage}
          
        />
        <KeyComponent
          dataKey={83}
          keyName='s'
          keySound='confusio'
          keySrc={"../static/sounds/confusio-sound-8bit.wav"}
          setImage={setImage}
          
        />
        <KeyComponent
          dataKey={68}
          keyName='d'
          keySound='death'
          keySrc={"../static/sounds/death-sound-8bit.wav"}
          setImage={setImage}
          
        />
        <KeyComponent
          dataKey={70}
          keyName='f'
          keySound='hurry-up'
          keySrc={"../static/sounds/hurry-up-8bit.wav"}
          setImage={setImage}
          
        />
        <KeyComponent
          dataKey={71}
          keyName='g'
          keySound='jump'
          keySrc={"../static/sounds/jump2-8bit.wav"}
          setImage={setImage}
          
        />
        <KeyComponent
          dataKey={72}
          keyName='h'
          keySound='mini-jump'
          keySrc={"../static/sounds/mini-jump-8bit.wav"}
          setImage={setImage}
          
        />
        <KeyComponent
          dataKey={74}
          keyName='j'
          keySound='sfx-danger'
          keySrc={"../static/sounds/sfx-danger.wav"}
          setImage={setImage}
          
        />
        <KeyComponent
          dataKey={75}
          keyName='k'
          keySound='toneBit'
          keySrc={"../static/sounds/tone-bit.wav"}
          setImage={setImage}
          
        />
        <KeyComponent
          dataKey={76}
          keyName='l'
          keySound='worldClear'
          keySrc={"../static/sounds/world-clear-8bit.wav"}
          setImage={setImage}
        />
      </ParentContainer>
    </div>
  )
}


export {App}