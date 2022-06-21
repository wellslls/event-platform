
import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4og7fk504w801z4db1rh5e9/master',
    cache: new InMemoryCache()
})