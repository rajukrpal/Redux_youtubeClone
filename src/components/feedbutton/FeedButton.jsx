// import React from 'react'

// const FeedButton = () => {
//     const buttonArray = ["All","JavaScript","Live","Music","Accounting","Bojpuri","Mrathi","Panjabi","c","c++","C#","Move","Tewnding","Tom&jery","coartun","doremon",
//         "picachu","Computar","reactJS","Devlopar","JAVA","match","crecet","play"
//     ]
//   return (
//     <>
//     <div className='space-x-5 border w-full border-black overflow-x-scroll'>
//     {buttonArray.map((item,index)=>(
//         <button key={index} className='p-1 border border-gray-700 bg-gray-400 rounded text-sm '>{item}</button>
//     ))}
//     </div> 
//     </>
//   )
// }

// export default FeedButton



import React from 'react';

const FeedButton = () => {
    const buttonArray = [
        "All", "JavaScript", "Live", "Music", "Accounting", "Bojpuri", "Mrathi", "Panjabi", 
        "c", "c++", "C#", "Move", "Tewnding", "Tom&jery", "coartun", "doremon", 
        "picachu", "Computar", "reactJS", "Devlopar", "JAVA", "match","mobail"
    ];

    return (
        <div className='space-x-5 border border-black '>
            {buttonArray.map((item, index) => (
                <button key={index} className='p-1 border border-gray-700 bg-gray-400 rounded text-sm'>{item}</button>
            ))}
        </div>
    );
}

export default FeedButton;
