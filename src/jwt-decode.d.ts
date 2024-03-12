declare module 'jwt-decode' {
    export interface DecodedToken {
      userId: string;
      exp: number;
    }
  
    function jwt_decode(token: string): DecodedToken;
  
    export = jwt_decode;
  }