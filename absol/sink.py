class VecSink:
    """Coletor de falas (usado nos testes)."""
    def __init__(self): self.out = []
    def say(self, category, prio, phrase): self.out.append((category, prio, phrase))
