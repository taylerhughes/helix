export default (
	{
	  requests: [
	    {
	      image:{
	        source:{
	          imageUri: `http://storage.googleapis.com/interview-resources/office-images/the-skimm-office-01.jpg`
	        }
	      },
	      features:[
	        {
	          type:"LABEL_DETECTION",
	          maxResults:10
	        }
	      ]
	    }
	  ]
	}
)