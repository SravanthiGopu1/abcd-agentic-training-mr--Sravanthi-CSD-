import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import mean_absolute_error, r2_score, accuracy_score

# Load Excel dataset
df = pd.read_excel("iq_dataset_large.xlsx", engine="openpyxl")


# ---------------- Regression ----------------
X = df.drop("iq", axis=1)
y = df["iq"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

reg_model = LinearRegression()
reg_model.fit(X_train, y_train)

y_pred = reg_model.predict(X_test)

print("=== REGRESSION RESULTS ===")
print("MAE:", mean_absolute_error(y_test, y_pred))
print("R2 Score:", r2_score(y_test, y_pred))

# Predict IQ
new_person = pd.DataFrame({
    "study_hours": [6],
    "memory_score": [80],
    "problem_solving": [85]
})

print("Predicted IQ:", int(reg_model.predict(new_person)[0]))

# ---------------- Classification ----------------
def iq_category(iq):
    if iq < 90:
        return "Low"
    elif iq <= 120:
        return "Average"
    else:
        return "High"

df["iq_level"] = df["iq"].apply(iq_category)

X = df.drop(["iq", "iq_level"], axis=1)
y = df["iq_level"]

le = LabelEncoder()
y = le.fit_transform(y)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

clf = RandomForestClassifier()
clf.fit(X_train, y_train)

y_pred = clf.predict(X_test)

print("\n=== CLASSIFICATION RESULTS ===")
print("Accuracy:", accuracy_score(y_test, y_pred))

# Predict IQ level
pred = clf.predict(new_person)
print("Predicted IQ Level:", le.inverse_transform(pred)[0])
