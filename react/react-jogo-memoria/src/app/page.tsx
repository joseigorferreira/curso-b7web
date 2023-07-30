'use client'

import { useEffect, useState } from 'react';
import { InfoItem } from '@/components/InfoItem';
import * as C from '../styles/Page.styles'
import { Button } from '@/components/Button';
import { GridItemType } from '@/types/GridItemType';
import { items } from '@/data/items'

const Page = () => {

  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);


  const resetAndCreateGrid = () => {
    //passo 1 - resetar o jogo
    setTimeElapsed(0);
    setMoveCount(0);
    setShowCount(0);
    setGridItems([]);

    //passo 2 - criar o grid e começar o jogo
    //  2.1 - criar um grid vazio
    let tempGrid: GridItemType[] = [];
    
    for (let i = 0; i < (items.length * 2); i++) {
      tempGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });
    }

    // //  2.2 - preencher o grid
    for (let w = 0; w < 2; w++) {
      for(let j = 0; j < items.length; j++){
        let pos = -1;
        while(pos < 0 || tempGrid[pos].item !== null){
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tempGrid[pos].item = j;
      }
    }


    //  2.3 - jogar no state
    setGridItems(tempGrid);

    //passo 3 - começar o jogo
    setPlaying(true);
  }

  useEffect(() => resetAndCreateGrid(), [])

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src='/assets/devmemory_logo.png' width="200" alt="" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label='Tempo' value='00:00' />
          <InfoItem label='Movimentos' value='0' />
        </C.InfoArea>

        <Button label="Reiniciar" icon="/svgs/restart.svg" onClick={resetAndCreateGrid} />
      </C.Info>

      <C.GridArea>
        <C.Grid>
          {/* {gridItems.map(gridItem => 
            
            )} */}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
}

export default Page;