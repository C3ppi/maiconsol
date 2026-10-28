"""Janela com botões para ligar/desligar cada gatilho e log das falas."""
import tkinter as tk
from tkinter import ttk
from .config import MODULES

def run(cfg, on_close, log_queue):
    root = tk.Tk(); root.title("ABSOL local"); root.geometry("520x640")
    ttk.Label(root, text="Gatilhos (marque = ligado)", font=("Segoe UI", 12, "bold")).pack(anchor="w", padx=12, pady=(10, 4))
    box = ttk.Frame(root); box.pack(fill="x", padx=12)
    vars_ = {}
    def toggle(m):
        cfg.set(m, vars_[m].get())
    for mid, name, desc in MODULES:
        v = tk.BooleanVar(value=cfg.enabled(mid)); vars_[mid] = v
        row = ttk.Frame(box); row.pack(fill="x", pady=1)
        ttk.Checkbutton(row, text=name, variable=v, command=lambda m=mid: toggle(m)).pack(side="left")
        ttk.Label(row, text="  " + desc, foreground="#777").pack(side="left")
    def all_(on):
        for mid, v in vars_.items(): v.set(on); cfg.set(mid, on)
    bar = ttk.Frame(root); bar.pack(fill="x", padx=12, pady=8)
    ttk.Button(bar, text="Ligar todos", command=lambda: all_(True)).pack(side="left")
    ttk.Button(bar, text="Desligar todos", command=lambda: all_(False)).pack(side="left", padx=6)
    ttk.Label(root, text="Últimas falas").pack(anchor="w", padx=12)
    txt = tk.Text(root, height=18, state="disabled", wrap="word"); txt.pack(fill="both", expand=True, padx=12, pady=(0, 12))
    def pump():
        try:
            while True:
                line = log_queue.get_nowait()
                txt.config(state="normal"); txt.insert("end", line + "\n"); txt.see("end"); txt.config(state="disabled")
        except Exception: pass
        root.after(300, pump)
    pump()
    root.protocol("WM_DELETE_WINDOW", lambda: (on_close(), root.destroy()))
    root.mainloop()
