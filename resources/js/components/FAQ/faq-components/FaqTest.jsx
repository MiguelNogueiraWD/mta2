//Imports here
import {Accordion, AccordionItem} from "@nextui-org/react";

//Import data
import { FAQ } from "../../data/dataFaq";



export default function FaqTest(){

    const accordionItems = FAQ.map(item => (
        <div key={item.id}>

                <h4 className=" font-bold text-lg"
                >{item.dataBlock[0].maintitle}</h4>

                <div className="pb-5">
                    <Accordion variant="bordered">
                        {item.dataBlock[0].questions.map(question => (

                            <AccordionItem
                                key={question.id}
                                aria-label={`Accordion ${question.id}`}
                                title={question.title}>

                                {question.description}

                            </AccordionItem>

                        ))}
                    </Accordion>
                </div>
               
            </div>
    ));
    
       
       
            
   
    return(
      <div className="m-5">         
          {accordionItems} 
             {console.log(FAQ)}
      </div >
    );
};