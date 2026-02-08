class movies_graph{
    movies=[];
    features=[];
    graph=[];
     add_movie(m,f){
        this.movies.push(m);
        this.features.push(f);
        let n=this.movies.length-1;
        this.graph.push(new Array(n).fill(0));
         for(let i=0;i<=n;i++){
            this.graph[i][n]=0;
        }
          for(let v of this.features[n]){
            for(let j=0;j<n;j++){
             for(let u of this.features[j]){
                if(v==u){
                    this.graph[n][j]+=1;
                    this.graph[j][n]+=1;
                }
             }
          } 
          } 
        
     }
     watch(m){
        let recommend=[];
        let index=this.movies.indexOf(m);
        if(index>-1){
            for(let i=0;i<this.movies.length;i++){
                if(index!=i){
                 if(this.graph[index][i]>0){
                    recommend.push(this.movies[i])
                 }   
                }  
            }
        }
        return recommend;
     }
}