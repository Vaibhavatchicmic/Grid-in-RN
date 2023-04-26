import React from 'react';
import {View,Text,SafeAreaView} from 'react-native';

const FlexDimensionsBasics = () => {
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
    <SafeAreaView style={{margin:0,flex:1,flexDirection:"column",backgroundColor:"blue"}}>
      {
        Array(25).fill(0).map(()=>
        
        <View style={{flex:1,margin:1,flexDirection:"row",backgroundColor:"red"}}>
        
                         {
                    Array(10).fill(0).map(()=>
                    
                    <View style={{flex:1,margin:1,backgroundColor:"yellow"}}>
                    
                    
                    
                    </View> 
                    
                    
                    )
                  }
        
        </View> 
        
        
        )
      }
    </SafeAreaView>
  );
};

export default FlexDimensionsBasics;
