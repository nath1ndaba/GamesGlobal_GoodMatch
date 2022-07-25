var http = require('http');
var fs = require('fs');
var lowercases = require('lower-case');


var sentence = "";
function GetNames () 
{

  const prompt = require("prompt-sync")({ sigint: true });
   
  name1 = prompt("First Name: ");
  while (name1.length <= 1)
   {
      console.log("The name may have no less than 1 character"); 
      const prompt = require("prompt-sync")({ sigint: true });
      name1 = prompt("First Name: ");
   } 
  name2 = prompt("Second  Name: ");
  while (name2.length<=1)
  {
    console.log("The name may have no less than 1 character");
    const prompt = require("prompt-sync")({ sigint: true });
    name2 = prompt("Second  Name: ");
  } 

  sentence = lowercases.lowerCase(name1) + " matches " + lowercases.lowerCase(name2);
  GoodMatchFunc(sentence, 0);
}
var charPosition = 0;
var HowManyOccurrences = 0;
const Occurances = [];
const TrashOfCounted = [];
var countOccurences = 0;
function GoodMatchFunc(sentence, len) 
{
    if(charPosition >= sentence.length)
    {
      return; //base case
    }
    if (len == sentence.length)
    {
      if(TrashOfCounted.length==0)
      {
        
        Occurances[countOccurences] = HowManyOccurrences;                         //Storing the number of occurances
        TrashOfCounted[countOccurences] = sentence.charAt(countOccurences);       //Store trush to know if we have came accross this value before
      }
      else
      {
        for(var v = 0; v <TrashOfCounted.length; v++)
        {
          if(!TrashOfCounted.includes(sentence.charAt(charPosition)) && sentence.charAt(countOccurences)!=" ")
          {
              Occurances[Occurances.length] = HowManyOccurrences;                         //Storing the number of occurances
              TrashOfCounted[TrashOfCounted.length] = sentence.charAt(countOccurences);
          }
          
        }


      }

      
      
                         //Storing the number of occurances
        HowManyOccurrences = 0;                                       // Clear HowManyOccurrences to count from scrach
        charPosition ++;                                              //shift to next char once one has been done
        len = charPosition;                                          //avoid starting from the beginning always, where chars have been visited
        countOccurences++;

        GoodMatchFunc(sentence, len);


     
    }

    if(sentence.charAt(charPosition) == sentence.charAt(len))
    {
      
      HowManyOccurrences  ++;
    }

    GoodMatchFunc(sentence, len + 1);
  }
  function printData()
  {
    console.log("Part One Results");
    for(let x = 0; x<Occurances.length; x++  )
    {
      console.log(Occurances[x]);
    }
    console.log("End Of part One Results");
    ReduceNumber();
  }
  /*
function checkTrush()
{


}*/

/*
function GetName1()
{
  const prompt = require("prompt-sync")({ sigint: true });
   
  name1 = prompt("First Name: ");
  if (name1.length <= 1)
   {
      console.log("The name may have no less than 1 character"); 
      GetName1();
   } 
   return name1;
}
function GetName2()
{
  const prompt = require("prompt-sync")({ sigint: true });
  
  const name2 = prompt("Second Name: ");
  if (name2.length <= 1)
   {
      console.log("The name may have no less than 1 character"); 
      GetName2();
   } 

   const sentence = lowercases.lowerCase(name1) + " maches " + lowercases.lowerCase(name2);
   GoodMatchFunc(sentence, 0);
}
GoodMatchFunc();

*/
//Part 2: Reducing my number to 2 digits
var c = 0;
var sumOfTwoValues = 0;
var arrayForSumming= [];
function ReduceNumber()
{
  arrayForSumming.length= Occurances.length;
  if(c>=arrayForSumming.length-c)
  {
    return;
  }
  else
  {
    if(c==arrayForSumming.length-1-c) //same as [c==arrayForSumming.length-1-c]
    {
      arrayForSumming[c] = Occurances[c];
      arrayForSumming.length = c+1;
      console.log(arrayForSumming[c] );
      Occurances.length = 0; // Empty this bucket since we have used up its belogings
     

      c=0;
    }
    else
    {
      var FromRightValue = Occurances[Occurances.length-1-c];
      var FromLeftValue = Occurances[c];
      sumOfTwoValues = FromLeftValue+FromRightValue;
      arrayForSumming[c] = sumOfTwoValues;
      console.log(sumOfTwoValues);
      c++;
    }
    ReduceNumber();
  }

}
GetNames () ;
printData();
