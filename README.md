# 🏛️ Sthiti AI: A Digital Lifeline for the Unseen
> **"Turning every smartphone into a tool for human dignity."**

## 🔴 The Heart of the Problem
In our bustling cities, people in extreme distress—the homeless, the hungry, the injured, or those lost in crisis—often become invisible. 

* **The Gap:** Citizens want to help but don't know who to call or how to describe the location accurately.
* **The Delay:** NGOs have resources but lack a real-time **"Map of Need"** to find where help is required *right now*.
* **The Consequence:** Without a direct bridge, help arrives too late.

## 💡 The Solution: Sthiti AI
**Sthiti** (Sanskrit for *Condition/Status*) is a humanitarian platform that ensures no cry for help goes unheard. We bridge the gap between a citizen's observation and an NGO's action using AI-driven triage.

---

## 🛠️ How it Works (The Human Flow)

### 1. 👁️ AI-Powered Triage
When a citizen uploads a photo of someone in distress, **Google Gemini** analyzes the visual context to categorize the urgency:
* **Food/Water Deprivation**
* **Medical Emergency**
* **Shelter/Clothing Needs**

The AI assigns a **Priority Score (1-10)**, ensuring NGOs handle life-threatening cases first.

### 2. 📍 The Live Map of Hope
Every report is pinned to a real-time map using **Leaflet.js**. This allows NGOs to visualize "clusters of need" and optimize their aid routes across the city.

### 3. 🏢 The NGO Command Center
A professional, glassmorphic dashboard where data turns into **Action**. NGOs can:
* View high-priority alerts instantly.
* Mark cases as **"Assistance Dispatched"** or **"Resolved"**.
* Track impact history to improve future response.

---

## 💾 Technical Architecture

### Database Schema (SQLite)
| Table | Column | Description |
| :--- | :--- | :--- |
| **Reports** | `id` | Unique incident identifier |
| | `type` | Categorization by Gemini AI |
| | `priority` | Impact Score (1-10) |
| | `location` | Lat/Long coordinates |
| | `status` | Pending / Dispatched / Resolved |

### Tech Stack
* **Intelligence:** Google Gemini API (Multimodal analysis)
* **Frontend:** Vanilla JS & CSS3 (Custom Glassmorphic design)
* **Backend:** Node.js & Express
* **Database:** SQLite
* **Mapping:** Leaflet.js

---

## 🔮 Future Roadmap: Proactive Humanitarianism
Our vision is to move from **Reporting** to **Prediction**.

### 🎥 Smart CCTV Integration (Automated Vigilance)
We plan to integrate with city-wide CCTV feeds to enable:
* **Automated Detection:** Using Computer Vision to autonomously detect people in distress (e.g., someone collapsed or an abandoned child).
* **Zero-Latency Alerts:** Instantly triggering alerts in the NGO Command Center without human intervention.
* **24/7 Coverage:** Protecting the most vulnerable even in low-traffic areas or late at night.

---

## 📈 Our Mission
To reduce the distance between a **cry for help** and the **hand that provides it**. We believe that with the right technology, no person should be invisible in their moment of need.
