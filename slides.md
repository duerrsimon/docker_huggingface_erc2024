---
# You can also start simply with 'default'
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background:
# some information about your slides (markdown enabled)
title: Sharing Protein AI Models Using Huggingface
info: |
  Docker + Gradio + Rest API
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# take snapshot for each slide in the overview
overviewSnapshots: true
---

# Sharing Protein AI Models Using Huggingface

Please note that some of the images and content in these slides were borrowed from [pointful.github.io](https://pointful.github.io/docker-intro/)

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/> or use navigation in lower left corner to navigate.
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->


---
transition: fade-out
layout: iframe
url: https://simonduerr-proteinmpnn.hf.space
---



---

# Topics


<h3 class="mt-10 mb-4">We will cover</h3>

- <logos-docker-icon /> **Docker** - containerize your app
- **Gradio** - build a user interface for your app
- 🤗 **HuggingFace Spaces** - Share your app on HuggingFace Spaces
- **Application Programming Interface (API)** - access your app programatically

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/features/slide-scope-style
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
class: text-center
---



# Virtualization vs. Docker

<img src="/assets/docker-vs-vm.png" alt="https://www.inovex.de/de/blog/docker-an-introduction-to-easy-containerization/" class="w-3/4 mt-10 mx-auto" />

Docker provides a light-weight abstraction to reproduce a computing environment.

<small><a href="https://www.inovex.de/de/blog/docker-an-introduction-to-easy-containerization/">Image Source</a></small>

---
class: text-center
---

# The challenge

<img src="/assets/the-challenge.png" />

---
class: text-center
---

# Matrix from hell

<img src="/assets/the-matrix-from-hell.png" class="mx-auto w-3/4" />

---
class: text-center
---

# Cargo Transport pre-1960

<img src="/assets/cargo-transport-pre-1960.png" />

---
class: text-center
---

# Also a matrix from hell

<img src="/assets/also-a-matrix-from-hell.png" class="mx-auto w-3/4"/>

---
class: text-center
---

# Solution: Intermodal Shipping Container

<img src="/assets/intermodal-shipping-container.png" />

---
class: text-center
---

# Docker: Containers for code

<img src="/assets/shipping-container-for-code.png" />

---
class: text-center
---

## Build once... (finally) run anywhere\*

<div class="mt-16 mx-auto w-1/2" v-click>
* Where "anywhere" means an x86 server running a modern Linux kernel
(3.2+ generally or 2.6.32+ for RHEL 6.5+, Fedora, & related)
</div>

<div class="mt-16 mx-auto w-1/2" v-click>
* on Windows a Docker container uses virtualization
</div>

---
---

# What Docker gives you:

<ul class="mt-6 mb-2">
<li class="my-2" v-click> A clean, safe, hygienic, portable runtime environment for your app. </li>
<li class="my-2" v-click>No worries about missing dependencies, packages and other pain points during subsequent deployments.</li>
<li class="my-2" v-click>Run each app in its own isolated container. Multiple incompatible versions, even it is ancient stuff (32-bit). </li>
<li class="my-2" v-click>Instant replay and reset of image snapshots.</li>
</ul>

<div class="mt-10 text-center" v-click>
Docker is used by GitHub Actions and on HuggingFace Spaces. 
</div>
---
class: text-center
---

# Why are containers lightweight

<img src="/assets/why-are-containers-lightwight.png" />

---
---

# Downsides

<ul class="text-left">
<li v-click>Standard Docker doesn't support CUDA </li>
<li v-click>CUDA driver needs to match the hardware, use <code>nvidia-docker</code></li>
<li v-click> Security models assumes root privileges</li>
<li v-click>Limited support for network communication and diskless nodes in HPC</li>

</ul>

<img src="/assets/Docker_hpc.png" v-click class="w-3/4 mx-auto ">

<div class="text-center" v-click>

**but** many of these tools build on the Docker language!

</div>

---
---

# Dockerfile

```dockerfile {all|1|2|4-6|8-9|10|12-14|16|all}{lines:true}
FROM python:3.12
WORKDIR /usr/local/app

# Install the application dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy in the source code
COPY src ./src
EXPOSE 5000

# Setup an app user so the container doesn't run as the root user
RUN useradd app
USER app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]
```

---
---

# Common instructions

<ul>
    <li><code>FROM &lt;image&gt;</code> - base image.</li>
    <li><code>WORKDIR &lt;path&gt;</code> - path in the image where files will be copied and commands will be executed.</li>
    <li><code>COPY &lt;host-path&gt; &lt;image-path&gt;</code> - Copy files from the host workdir and put them into the container image.</li>
    <li><code>RUN &lt;command&gt;</code> - execute some command in the default shell of the image.</li>
    <li><code>ENV &lt;name&gt; &lt;value&gt;</code> - set an environment variable that a running container will use.</li>
    <li><code>EXPOSE &lt;port-number&gt;</code> Expose a port on the image</li>
    <li><code>USER &lt;user-or-uid&gt;</code> - sets the default user for all subsequent instructions.</li>
    <li><code>CMD ["&lt;command&gt;", "&lt;arg1&gt;"]</code> - Default command the container will run.</li>
</ul>


---
---

# How to run a container

### General command
<br>
```
docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]
```
<br>

### Launch a gradio app on your ressources
<br>
```
docker run -it -p 7860:7860 --platform=linux/amd64 --gpus all registry.hf.space/simonduerr-proteinmpnn:latest
```
<br>

### Run a command directly in the image
<br>
```
docker run --gpus all -v $(pwd):/src inductivebio/docking-baseline:1.0.0 python3 /src/run_strong_baseline.py
```
<br>
---
---

# ProteinMPNN Dockerfile

```dockerfile
FROM nvidia/cuda:11.7.1-cudnn8-devel-ubuntu22.04
RUN apt-get update
RUN apt-get install -y python3 python3-pip git wget
 
WORKDIR /code
COPY ./requirements.txt /code/requirements.txt
RUN python3 -m pip install --upgrade pip 

RUN pip install gradio==3.46.0
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
RUN useradd -m -u 1000 user
USER user
ENV HOME=/home/user \
    PATH=/home/user/.local/bin:$PATH

WORKDIR $HOME/app
COPY --chown=user . $HOME/app

EXPOSE 7860
ENV GRADIO_SERVER_NAME="0.0.0.0"

CMD ["python3", "app.py"]
```

---
class: text-center
---
# Staying on top of the literature

<img src="/assets/toomanypapers.gif" class="mx-auto my-auto" />

## but seeing is believing

---
class: text-center
---

# Okay, so then lets build a demo
<img src="/assets/oldway.png">

---
---

# Webservers go offline over time

<img src="/assets/future_webservers.png" class="mx-auto w-3/4" />
---
---

# GoogleColab

Requires maintenance because google changes the environment from time to time. 
Limited User interface. 

<img src="/assets/colabfold.png">

---
---

<img src="/assets/new_way_demos.png">

---
---

# Streamlit

A UX framework to build multi-page webapps. 

But no API (and probably never because requires complete redesign of code)
<img src="/assets/streamlit.gif" />



---
---

# Gradio

A library to create web applications from Python. 

Almost as simple as `argparse`. 

Other alternatives: Streamlit (no API), Shiny (clunky setup and no API), Flask (more advanced webserver).

Develop locally, use anywhere. 

---
---

# Where to host?

Gradio runs inside Google Colab, locally, on your local server infrastructure or on HuggingFace Spaces.

<img src="/image-4.png" class="w-2/3 mx-auto" />

<div class="text-center mt-10 text-blue-600"> <a href="https://huggingface.com">huggingface.com</a> </div>



---
layout: iframe
url: https://www.gradio.app/playground
---



---
---

# Public link sharing

Make available a tunnel to your GPU (bypassing VPN/firewalls) via HTTP. `app.launch(share=True)` 

<img src="/image.png" class="mx-auto w-3/4" />

`app.launch(share=True)`



---
---
# Gradio Molecule3D


```
pip install gradio_molecule3d
```

<video controls autoplay>
<source src="/assets/molecule3d_gradio.mp4"  />
</video>

---
---

# Use Gradio Molecule3D

```python
from gradio_molecule3d import Molecule3D

 reps =    [
    {
      "model": 0,
      "style": "cartoon",
      "color": "whiteCarbon",
      "residue_range": "",
      "around": 0,
      "byres": False,
    },
    {
      "model": 0,
      "chain": "A",
      "resname": "HIS",
      "style": "stick",
      "color": "red"
    }
  ]

with gr.Blocks() as demo:
    inp = Molecule3D(label="Input molecule", reps=reps)

```

---
---

# Gradio Molecule2d

<iframe
	src="https://simonduerr-gradio-molecule2d.hf.space"
	frameborder="0"
	width="850"
	height="450"
></iframe>

---
---

# Other custom components

<img src="/assets/gradio_ccs.png" />


---
---

# Rest API 

```bash
pip install gradio_client
```

```python
from gradio_client import Client, handle_file

client = Client("https://mlsb-strong-docking-baseline.hf.space/")
result = client.predict(
		input_sequence="AAAA",
		input_ligand="CCC",
		input_msa=handle_file('input.msa'),
		input_protein=handle_file('input.pdb'),
		api_name="/predict"
)
print(result)
```

Find API docs for each space at the bottom:
![alt text](/image-2.png)


---
---

# Arbitrary HTML

Browsers have security rules. If you want to return arbitrary short HTML snippets use an `iframe` with `srcdoc`

```python
def predict(input):
    # do something to generate output html
    x = ("""<!DOCTYPE html><html> [..] </html>""") # do not use ' in this input
    return f"""<iframe  [..] srcdoc='{x}'></iframe>

[...]

with gr.Blocks() as app:
  out = gr.HTML()

[...]

```

---
---

# Generators

Sometimes your model might return a series of predictions. 

Simply return a generator and your app will show immediate outputs. 

```
def my_generator(x):
    for i in range(x):
        yield i
```



---
layout: two-cols
---


You can use Gradio Spaces (cannot change the underlying Docker image) or Docker spaces with full control. 

In Gradio spaces you use `packages.txt` for `apt-get` installable packages and `requirements.txt` for python packages. 

::right::

<img src="/image-5.png" class="mx-auto" />


---
layout: two-cols
---

## Community grant

**Default** 2 CPU cores, 16GB of RAM

For academic projects you can ask HuggingFace to grant you a free GPU (e.g T4/A10G ...)

![Community grant](/assets/community_grant.png)

Works for Gradio and Docker spaces.


::right::

# ZeroGPU

Only for Gradio Spaces. 

![ZeroGPU](/assets/zerogpu.gif)



---
---

# Use from within pymol

Create a `script.py` file  and load it in pymol using `run path/to/script.py`


## 1. install gradio client
```python
from pymol import cmd

try:
    from gradio_client import Client
except ImportError:
    print("gradio_client not installed, trying install:")
    import pip 
    pip.main(['install', 'gradio_client'])
    from gradio_client import Client
```



---
---

## 2. PyMol command

```python
def pymol_command(
    name_of_input: str,
):
    input_pdb = cmd.get_pdbstr(name_of_input)

    t = threading.Thread(target=call_api,
                         args=(input_pdb),
                         kwargs={},
                         daemon=True)
    t.start()

cmd.extend("mymodel", pymol_command)
```

use as `mymodel PYMOLMODELNAME` from PyMol CMD

<img src="/image-3.png" class="w-2/3 mx-auto" />

---
---

## 3. call API

```python
def call_api(input_pdb):
    client = Client(gradio_link)

    job = client.submit(
				input_pdb,	# TextBox input
				api_name="/predict"
    )
    start = time.time()
    while (job.done() == False):
        status =  job.status()
        elapsed = time.time()-start 
        elapsed = time.strftime("%H:%M:%S", time.gmtime(elapsed))
        print(f"\r protpardelle running since {elapsed}", end="")
        time.sleep(1)
    results = job.result()
    results = json.loads(results)
    for (name,pdb_content) in results:
        cmd.read_pdbstr(pdb_content, os.path.basename(name))
```

---
layout: center
class: text-center
---

# Learn More

[Documentation](https://www.gradio.app/guides/quickstart) · [GitHub](https://github.com/gradio-app/gradio) · [Showcases](https://huggingface.co/collections/simonduerr/protein-design---protein-structure-prediction-64f9c6fda9295717466dbe8f)

X/Bluesky @simonduerr




<PoweredBySlidev mt-10 />
