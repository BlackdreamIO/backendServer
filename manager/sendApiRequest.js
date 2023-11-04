const supabase = require("../supabase");

const sendApiRequest = async (res) => {
    try 
    {
        const data = await FetchData();
        res.status(200).send(data);
    } 
    catch (error) 
    {
        return 'Internal Server Error';
    }
}

const FetchData = async () => {
    try 
    {
        const { data, error } = await supabase
            .from("my_technology")
            .select('*');
        
        if(error) return;
        return data;
    } 
    catch (error) 
    {
        return "null";
    }
}

module.exports = sendApiRequest;