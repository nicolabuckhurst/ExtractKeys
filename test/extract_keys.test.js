const extract = require("../src/extract_keys").extract;

describe("simple test", ()=>{
    test("extracts urls from a single object", ()=>{
        const testObject = {
            url:"testurl",
            noturl:"don't want this"
        };

        expect(extract(testObject, "url")).toEqual(["testurl"]);
    });

    test("extracts urls from a nested object", () =>{
        const testObject ={
            url:"testurl1",
            innertestobject:{
                url:"testurl2",
                noturl:"don't want this"
            }
        }

        expect(extract(testObject, "url")).toEqual(["testurl1", "testurl2"]);
    });

    test("extracts urls from more complex object", ()=>{
        const testObject = {
            url:"testurl1",
            innertestobject:{
                url:"testurl2",
                noturl:"don't want this",
                innerinnerobject:{
                    url:"testurl3",
                    noturl:"no no no",
                    inner3object:{
                        noturl:"nope"
                    }
                }
            } 
        }

        expect(extract(testObject, "url")).toEqual(["testurl1","testurl2","testurl3"]);
    });

    test("edge case", ()=>{
        const testObject = {
            url:"testurl1",
            innertestobject:{
                noturl:"don't want this",
                url:{
                    url:"testurl2",
                    noturl:"no no no",
                    inner3object:{
                        noturl:"nope"
                    }
                }
            } 
        }

        expect(extract(testObject, "url")).toEqual(["testurl1","testurl2"]);
    });



})