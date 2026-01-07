---
title: What Surgeons Think About PRISM
date: "2024-11-20"
excerpt: We showed PRISM to 50+ pancreatic surgeons across Cleveland Clinic, Henry Ford Health, and MyMichigan Health. Here's what they said.
image: /PRISM_Mixed_Reality.png
---

# What Surgeons Think About PRISM

Building medical technology in a vacuum is pointless. The best innovations come from understanding real-world problems and getting feedback from the people who will actually use the product. That's why we brought PRISM to **~50 pancreatic surgeons and oncologists** from institutions including Cleveland Clinic, Henry Ford Health, and MyMichigan Health.

## The Evaluation Process

We didn't just show them slides. We wanted surgeons to experience PRISM:

1. **Hands-on with the MR headset** - Surgeons put on the Meta Quest 3S and saw our real-time organ detection in action
2. **Demo of the web application** - We walked them through CT scan uploads and tumor segmentation
3. **Feedback forms** - Detailed questionnaires to assess clinical relevance, usability, and potential impact

The question we cared about most: **"Does PRISM have the potential to reduce complication rates in pancreatic surgery?"**

## The Response: Better Than We Hoped

### Dr. Arun Kumar, Oncologist at Cleveland Clinic

> "Yes, better imaging and analysis would lead to better outcomes with improved prognosis. It could reduce mortality by up to 30 percent."

**30 percent reduction in mortality.** Let that sink in. Pancreatic cancer has one of the worst survival rates of any cancer—a 5-year survival rate below 10%. If PRISM can contribute to even a fraction of that potential improvement, it could save thousands of lives annually.

### Dr. Vasanth Stalin, General Surgeon at MyMichigan Health

Dr. Stalin didn't just give us encouraging words—he gave us a **Letter of Intent**, signaling his commitment to pilot PRISM in clinical settings.

His feedback was both encouraging and brutally honest:

> "This application has the potential to reduce the death rate/complication rate of pancreatic cancer/surgery, but the devil is in the details and the logistics of proper implementation of this application along with seamless integration with visual images acquired in real-time from the camera are critical to the success of such technology."

Translation: The technology is promising, but integration matters. It's not enough to build something that works in a lab—it has to work seamlessly in the chaos of an actual operating room.

## What We Learned (and Changed)

Surgeon feedback wasn't just validation—it was a roadmap for improvement. Here's what they told us to add:

### 1. Superior Mesenteric Artery (SMA) Detection

Multiple surgeons emphasized the SMA as a **critical structure**. Minor injuries to this artery can lead to severe, life-threatening hemorrhaging. It wasn't in our initial model.

**What we did:** Retrained our YOLOv8 model with additional data focused on vascular anatomy, specifically emphasizing SMA detection.

### 2. Blood Detection

Active bleeding during surgery is an emergency. Surgeons wanted PRISM to not just show them anatomy, but alert them to **active bleeding sites** in real-time.

**What we did:** Added blood detection to our model using live surgical footage that captured bleeding events. This helps surgeons identify and address hemorrhaging faster.

### 3. Integration is Everything

Dr. Stalin's point about "seamless integration" hit home. A tool that disrupts surgical workflow won't get used, no matter how accurate it is.

**What we're focusing on:** Making PRISM as frictionless as possible:
- Simple CT scan upload (drag-and-drop)
- Headset that doesn't interfere with sterile fields
- Real-time overlays that don't obscure the surgical view
- Detection in under 7 seconds (fast enough to be useful, not disruptive)

## The Common Thread: This is Needed

Across all 50+ evaluations, one theme emerged: **surgeons want better intraoperative guidance**.

Pancreatic surgery is incredibly difficult:
- The pancreas is deep in the abdomen
- It's surrounded by critical blood vessels
- Tumors under 2 cm are easily missed
- Complication rates exceed 40%
- Surgeons rely on mental reconstruction of 2D images during 3D surgery

PRISM addresses all of these pain points. It's not just a nice-to-have—it's solving a real problem that surgeons face every day.

## What's Next

Armed with surgeon feedback and a Letter of Intent from MyMichigan Health, we're moving forward:

1. **Clinical trials** - Working with IRB approval to begin real-world testing
2. **FDA Class II pre-submission** - Preparing regulatory documentation
3. **More partnerships** - Expanding to Michigan Medicine's Rogel Cancer Center

We're not building PRISM in isolation anymore. We're building it **with surgeons**, for surgeons, to help patients.

---

*Interested in how PRISM works? Check out our Technical Validation post to see the numbers behind our 90% accuracy rates.*