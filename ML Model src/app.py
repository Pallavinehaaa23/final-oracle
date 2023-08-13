from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pickle
from tensorflow.keras.models import load_model
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
app = FastAPI()

# Load the trained model
with open('we-hire.pkl', 'rb') as f:
    model = pickle.load(f)

# Load label encoder and scaler
with open('label_encoder.pkl', 'rb') as le_file:
    label_encoder = pickle.load(le_file)

with open('scaler.pkl', 'rb') as scaler_file:
    scaler = pickle.load(scaler_file)

class CandidateInput(BaseModel):
    Candidate_ID: int
    Job_Role: str
    Specific_Role: str
    Weighted_Average: float

@app.post('/')
async def predict(candidate: CandidateInput):
    try:
        # Preprocess input data
        print("1")
        df = pd.DataFrame([candidate.dict().values()], columns=candidate.dict().keys())
        
        print("2")
        
        print("3")
        
        print("4")
        
        print("5")
       
        print("6")
        print('a')

        df["Job_Role"] = label_encoder.transform(df["Job_Role"])
        df["Specific_Role"] = label_encoder.transform(df["Specific_Role"])
        df["Weighted_Average"] = scaler.transform(df[["Weighted_Average"]])

        prediction = model.predict(df)


        print('b')
        response = {'Candidate_ID': candidate.Candidate_ID, 'predicted_expertise': round(prediction[0])}
        
        print("7")
        
        return response
    except Exception as e:
        print("8")
        raise HTTPException(status_code=500, detail=str(e))