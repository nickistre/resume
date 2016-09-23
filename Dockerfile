FROM ubuntu:16.04
RUN apt-get update -y
RUN apt-get install -y apache2
EXPOSE 80
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]latest