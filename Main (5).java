public class Main{
    public static void main(String[] args){
        
        String name = "javedja";
        String n = "";
        
        
        for(int i = 0; i < name.length(); i++){
            
            char c = name.charAt(i);
            boolean found  = false;
            
            
            for(int j = 0; j < n.length(); j++){
                
                if(n.charAt(j) == c){
                    found = true;
                    break;
                    
                }
            }
            if(!found){
                n= n+c;
            }
            
        }
        System.out.println(n);
    }
}