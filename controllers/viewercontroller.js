const Viewer = require("../models/Viewer")

const insertviewer = async (request, response) => {
    try 
    {
      const input = request.body;
      const viewer = new Viewer(input);
      await viewer.save();
      response.status(200).send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

  const updateviewerprofile = async (request, response) => 
    {
      try 
      {
        const input = request.body;
        const email = input.email; 
        const viewer = await Viewer.findOne({ email });
        if (!viewer) 
        {
          response.status(200).send('Viewer not found with the provided email id');
        }
        for (const key in input) 
        {
          if (key !== 'email' && input[key]) {
            viewer[key] = input[key];
          }
        }
        await viewer.save();
        response.status(200).send('Viewer Profile Updated Successfully');
      } 
      catch (e) 
      {
        response.status(500).send(e.message);
      }
    };

    const checkviewerlogin = async (request, response) => 
        {
           try 
           {
             const input = request.body
             const viewer = await Viewer.findOne(input)
             response.json(viewer)
           } 
           catch (error) 
           {
             response.status(500).send(error.message);
           }
         };

    const viewerprofile = async (request, response) => 
   {
      try 
      {
        const email = request.params.email
        const viewer = await Viewer.findOne({email})
        if(viewer)
        {
          response.json(viewer)
        }
        else
        {
          return response.status(200).send('Viewer not found with the provided email id');
        }
        
      } 
      catch (error) 
      {
        response.status(500).send(error.message);
      }
    };

    module.exports = {insertviewer,checkviewerlogin,updateviewerprofile,viewerprofile}